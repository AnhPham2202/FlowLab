import type {Node, NodeProps} from '@xyflow/react';
import {KafkaNodeTypeEnum} from '../type/nodeTypes.ts';

export type ProducerData = {
  name: string;
  topic: string;
  messagesPerSec?: number;
};
export type ProducerNodeModel = Node<ProducerData, KafkaNodeTypeEnum.PRODUCER>;

function ProducerNode({ data, selected }: NodeProps<ProducerNodeModel>) {
  return (
    <div
      className={`rounded-lg border bg-white p-3 shadow-sm ${
        selected ? 'border-blue-500' : 'border-slate-300'
      }`}
    >
      <div className="text-sm font-semibold">🚀 Producer</div>

      <div className="mt-2 text-xs text-slate-600">
        <div>Name: {data.name}</div>
        <div>Topic: {data.topic}</div>
        {data.messagesPerSec && <div>Rate: {data.messagesPerSec}/s</div>}
      </div>
    </div>
  );
}
export default ProducerNode;
