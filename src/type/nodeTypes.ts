import PartitionNode from '../component/PartitionNode.tsx';
import type { NodeTypes } from '@xyflow/react';
import { TextUpdaterNode } from '../component/TextUpdaterNode.tsx';

export enum KafkaNodeType {
  CLUSTER = 'cluster',
  BROKER = 'broker',
  TOPIC = 'topic',
  PARTITION = 'partition',
  PRODUCER = 'producer',
  CONSUMER = 'consumer',
}

export const nodeTypes: NodeTypes = {
  partition: PartitionNode,
  textUpdater: TextUpdaterNode,
};
