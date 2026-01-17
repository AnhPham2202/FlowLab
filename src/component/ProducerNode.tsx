import type { Node, NodeProps } from '@xyflow/react';
import { KafkaNodeTypeEnum } from '../type/nodeTypes.ts';
import { Send } from 'lucide-react';
import BaseNode from '../common/BaseNode.tsx';

export type ProducerDataModel = {
  name: string;
  topic: string;
  messageTemplate?: string;
};
export type ProducerNodeModel = Node<
  ProducerDataModel,
  KafkaNodeTypeEnum.PRODUCER
>;

function ProducerNode({ data, selected }: NodeProps<ProducerNodeModel>) {
  return (
    <BaseNode
      selected={selected}
      icon={<Send size={16} />}
      title={'Producer'}
      subtitle={data.name ?? 'Producer'}
    >
      <p className="mb-2 text-xs text-[var(--text-secondary)]">
        Sends messages to Kafka
      </p>

      <button className="w-full rounded-md bg-[var(--primary-600)] py-1.5 text-xs text-white hover:bg-[var(--primary-700)]">
        Send message
      </button>
    </BaseNode>
  );
}
export default ProducerNode;
