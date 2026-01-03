import ProducerNode, {
  type ProducerNodeModel,
} from '../component/ProducerNode.tsx';
import OtherNode, { type OtherNodeModel } from '../component/OtherNode.tsx';

export enum KafkaNodeTypeEnum {
  CLUSTER = 'kafka:cluster',
  BROKER = 'kafka:broker',
  TOPIC = 'kafka:topic',
  PARTITION = 'kafka:partition',
  CONSUMER = 'kafka:consumer',
  PRODUCER = 'kafka:producer',
  OTHER = 'kafka:other',
}

export type KafkaNodeModel = OtherNodeModel | ProducerNodeModel;

export const kafkaNodeTypes = {
  [KafkaNodeTypeEnum.PRODUCER]: ProducerNode,
  [KafkaNodeTypeEnum.OTHER]: OtherNode,
};
