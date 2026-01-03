// typescript
import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  type Connection,
  ConnectionLineType,
  Controls,
  type Edge,
  type EdgeChange,
  MarkerType,
  MiniMap,
  type Node as RFNode,
  type NodeChange,
  type NodeTypes,
  ReactFlow,
  type ReactFlowInstance,
} from '@xyflow/react';
import PartitionNode from '../component/PartitionNode.tsx';
import BrokerNode from '../component/BrokerNode.tsx';
import ProducerNode from '../component/ProducerNode.tsx';
import type { KafkaNodeData } from '../type/nodes.ts';

const nodeTypes: NodeTypes = {
  partitionNode: PartitionNode,
  brokerNode: BrokerNode,
  producerNode: ProducerNode,
};

function mapKafkaTypeToNodeType(kind: string) {
  switch (kind) {
    case 'partition':
      return 'partitionNode';
    case 'broker':
      return 'brokerNode';
    case 'producer':
      return 'producerNode';
    default:
      return 'partitionNode';
  }
}

type NodeWithData = RFNode & {
  id: string;
  type?: string;
  position: { x: number; y: number };
  data: KafkaNodeData;
};

type Projectable = {
  project: (point: { x: number; y: number }) => { x: number; y: number };
};

export default function KafkaPlayground() {
  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance<
    NodeWithData,
    Edge
  > | null>(null);
  const [nodes, setNodes] = useState<NodeWithData[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes(
        (nds: NodeWithData[]) =>
          applyNodeChanges(changes, nds) as NodeWithData[],
      ),
    [],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback((connection: Connection) => {
    setEdges((eds) =>
      addEdge(
        {
          ...connection,
          markerEnd: { type: MarkerType.ArrowClosed },
        },
        eds,
      ),
    );
  }, []);

  const addKafkaNode = useCallback(
    (
      kind: KafkaNodeData['kind'],
      position: { x: number; y: number } | null = null,
    ) => {
      if (!reactFlowInstance) return;

      const id =
        typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2, 10);

      const nodeType = mapKafkaTypeToNodeType(kind);

      const defaultPos = position
        ? (reactFlowInstance as unknown as Projectable).project(position)
        : { x: Math.random() * 400 + 50, y: Math.random() * 300 + 50 };

      const node: NodeWithData = {
        id,
        type: nodeType,
        position: defaultPos,
        data: {
          kind,
          idLabel: `${kind}-${id.slice(0, 6)}`,
          details: {},
        },
      };
      setNodes((nds) => nds.concat(node));
    },
    [reactFlowInstance],
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      if (!reactFlowWrapper.current || !reactFlowInstance) return;

      const type = event.dataTransfer.getData('application/reactflow');
      if (!type) return;

      const bounds = reactFlowWrapper.current.getBoundingClientRect();
      const position = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      };
      addKafkaNode(type as KafkaNodeData['kind'], position);
    },
    [addKafkaNode, reactFlowInstance],
  );

  useEffect(() => {
    function handleAddCustom(ev: Event) {
      const detail = (ev as CustomEvent).detail;
      if (detail?.type)
        addKafkaNode(detail.type as KafkaNodeData['kind'], null);
    }
    window.addEventListener('kafka-add-node', handleAddCustom as EventListener);
    return () =>
      window.removeEventListener(
        'kafka-add-node',
        handleAddCustom as EventListener,
      );
  }, [addKafkaNode]);

  useEffect(() => {
    if (nodes.length === 0) {
      setNodes([
        {
          id: 'cluster-1',
          type: 'brokerNode',
          position: { x: 50, y: 60 },
          data: { kind: 'broker', idLabel: 'broker-1', details: {} },
        },
        {
          id: 'partition-1',
          type: 'partitionNode',
          position: { x: 320, y: 60 },
          data: {
            kind: 'partition',
            idLabel: 'partition-1',
            details: { partitionId: 0 },
          },
        },
      ]);
      setEdges([
        {
          id: 'e1-2',
          source: 'cluster-1',
          target: 'partition-1',
          markerEnd: { type: MarkerType.Arrow },
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="playground"
      style={{ display: 'flex', width: '100%', height: '100vh' }}
    >
      <div
        className="reactflow-wrapper"
        ref={reactFlowWrapper}
        style={{ flex: 1, height: '100%' }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={(rfi) =>
            setReactFlowInstance(rfi as ReactFlowInstance<NodeWithData, Edge>)
          }
          nodeTypes={nodeTypes}
          fitView
          connectionLineType={ConnectionLineType.SmoothStep}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <MiniMap />
          <Controls />
          <Background color="#1b2740" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
}
