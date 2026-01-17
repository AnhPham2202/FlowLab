import { useState } from 'react';
import {
  Background,
  Controls,
  type Edge,
  ReactFlow,
  useNodesState,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import ControlPanel from '../common/ControlPanel.tsx';
import {
  type KafkaNodeModel,
  KafkaNodeTypeEnum,
  kafkaNodeTypes,
} from '../type/nodeTypes.ts';
import { KAFKA_CONTROL_PANEL_CONFIG } from '../common/constants.ts';

const initialNodes: KafkaNodeModel[] = [
  {
    id: 'p-2',
    type: KafkaNodeTypeEnum.OTHER,
    position: { x: 100, y: 100 },
    data: {
      name1: 'Order Producer',
      topic1: 'order.created',
      messagesPerSec1: 120,
    },
  },
  {
    id: 'p-1',
    type: KafkaNodeTypeEnum.PRODUCER,
    position: { x: 200, y: 100 },
    data: {
      name: 'Order Producer',
      topic: 'order.created',
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'n1-n2',
    source: 'n1',
    target: 'n2',
  },
];

export function KafkaPlayground() {
  const [nodes, _setNodes, onNodesChange] =
    useNodesState<KafkaNodeModel>(initialNodes);
  const [edges, _setEdges] = useState<Edge[]>(initialEdges);

  const addKafkaNode = () => {};

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ControlPanel
        title="KAFKA"
        subtitle="Kafka playground"
        sections={KAFKA_CONTROL_PANEL_CONFIG}
        onAddNode={addKafkaNode}
        accentColor="from-indigo-500 to-purple-500"
      />

      <div style={{ flex: 1, height: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          nodeTypes={kafkaNodeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default KafkaPlayground;
