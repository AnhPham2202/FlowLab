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
import type { SidebarSection } from './ControlPanel.tsx';

export const KAFKA_CONTROL_PANEL_CONFIG: SidebarSection[] = [
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
