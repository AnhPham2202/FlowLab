import type { KafkaNodeData } from '../type/nodes.ts';
import { Handle, Position } from '@xyflow/react';

type Props = { data: KafkaNodeData };

export default function ProducerNode({ data }: Props) {
  return (
    <div className="kafka-node">
      <Handle type="source" position={Position.Right} />
      <div className="node-title">Producer</div>
      <div className="node-meta">{data.idLabel}</div>
      <div style={{ height: 6 }} />
      <div style={{ fontSize: 12, color: '#9ca3af' }}>
        Acks: {data.details?.acks ?? 'all'}
      </div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
