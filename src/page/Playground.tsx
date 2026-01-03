import { useState } from 'react';
import {
  Background,
  Controls,
  type Edge,
  type Node,
  ReactFlow,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { TextUpdaterNode } from '../component/TextUpdaterNode.tsx';
import Sidebar, { type SidebarSection } from '../common/Sidebar.tsx';
import {
  Database,
  HardDrive,
  Layers,
  Send,
  Server,
  Settings2,
  Share2,
  UserCheck,
} from 'lucide-react';

const initialNodes: Node[] = [
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
];
const initialEdges: Edge[] = [
  {
    id: 'n1-n2',
    source: 'n1',
    target: 'n2',
  },
];
const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const nodeTypes = { textUpdater: TextUpdaterNode };
export function Playground() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, _setEdges] = useState<Edge[]>(initialEdges);

  const addKafkaNode = () => {
    const id = `node-${nodes.length + 1}-${Date.now()}`;
    setNodes([
      ...nodes,
      {
        id,
        type: 'textUpdater',
        position: { x: Math.random() * 300, y: Math.random() * 300 },
        data: { value: 123 },
      },
    ]);
  };

  const KAFKA_CONFIG: SidebarSection[] = [
    {
      title: 'Infrastructure',
      items: [
        { id: 'cluster', label: 'Cluster', icon: Server },
        { id: 'broker', label: 'Broker', icon: HardDrive },
        { id: 'zookeeper', label: 'ZooKeeper/KRaft', icon: Settings2 },
      ],
    },
    {
      title: 'Data',
      items: [
        { id: 'topic', label: 'Topic', icon: Layers },
        { id: 'partition', label: 'Partition', icon: Database },
        { id: 'schema', label: 'Schema Registry', icon: Share2 },
      ],
    },
    {
      title: 'Clients',
      items: [
        { id: 'producer', label: 'Producer', icon: Send },
        { id: 'consumer', label: 'Consumer', icon: UserCheck },
        { id: 'consumer-group', label: 'Consumer Group', icon: UserCheck },
      ],
    },
  ];
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Sidebar
        title="KAFKA"
        subtitle="Kafka playground"
        sections={KAFKA_CONFIG}
        onAddNode={addKafkaNode}
        accentColor="from-green-500 to-emerald-600"
      />

      <div style={{ flex: 1, height: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          style={rfStyle}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
