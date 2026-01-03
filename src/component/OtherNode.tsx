import type { Node, NodeProps } from '@xyflow/react';
import type { KafkaNodeTypeEnum } from '../type/nodeTypes.ts';

export type OtherData = {
  name1: string;
  topic1: string;
  messagesPerSec1: number;
};
export type OtherNodeModel = Node<OtherData, KafkaNodeTypeEnum.OTHER>;

function OtherNode({ data, selected }: NodeProps<OtherNodeModel>) {
  return (
    <div
      className={`rounded-lg border bg-white p-3 shadow-sm ${
        selected ? 'border-blue-500' : 'border-slate-300'
      }`}
    >
      <div className="text-sm font-semibold">🚀 Other</div>

      <div className="mt-2 text-xs text-slate-600">
        <div>Name: {data.name1}</div>
        <div>Topic: {data.topic1}</div>
        {data.messagesPerSec1 && <div>Rate: {data.messagesPerSec1}/s</div>}
      </div>
    </div>
  );
}
export default OtherNode;
