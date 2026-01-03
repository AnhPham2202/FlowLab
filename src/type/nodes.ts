import type { Node as RFNode } from '@xyflow/react';

export type KafkaComponentType =
  | 'cluster'
  | 'broker'
  | 'topic'
  | 'partition'
  | 'producer'
  | 'consumer';

export interface KafkaNodeData extends Record<string, unknown> {
  kind: KafkaComponentType;
  idLabel: string;
  details?: Record<string, any>;
}

/**
 * Strongly-typed React Flow Node for Kafka nodes
 */
export type KafkaNode = RFNode<KafkaNodeData>;
