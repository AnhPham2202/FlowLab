import { Handle, Position } from '@xyflow/react';
import type { KafkaNodeData } from '../type/nodes.ts';

type Props = {
  data: KafkaNodeData;
};

export default function PartitionNode({ data }: Props) {
  const partitionId = data.details?.partitionId ?? data.idLabel;
  return (
    <div className="kafka-node">
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
      />
      <div className="node-title">Partition</div>
      <div className="node-meta">ID: {partitionId}</div>
      <div style={{ height: 8 }} />
      <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between' }}>
        <div style={{ fontSize: 12, color: '#9ca3af' }}>Msgs: 0</div>
        <div style={{ fontSize: 12, color: '#9ca3af' }}>Leader: -</div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="out"
        style={{ background: '#777' }}
      />
    </div>
  );
}
