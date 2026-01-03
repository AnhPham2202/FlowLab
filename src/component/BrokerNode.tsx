import { Handle, Position } from '@xyflow/react';
import type { KafkaNodeData } from '../type/nodes.ts';

type Props = { data: KafkaNodeData };

export default function BrokerNode({ data }: Props) {
  return (
    <div className="kafka-node">
      <Handle type="target" position={Position.Left} />
      <div className="node-title">Broker</div>
      <div className="node-meta">{data.idLabel}</div>
      <div style={{ height: 6 }} />
      <div style={{ fontSize: 12, color: '#9ca3af' }}>
        Partitions: {data.details?.partitions ?? 0}
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
