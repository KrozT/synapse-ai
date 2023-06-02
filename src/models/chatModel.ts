import { MessageModel } from '@/models/messageModel';

export interface ChatModel {
  id: number | null;
  userId: number | null;
  name: string | null;
  messages: MessageModel[];
}
