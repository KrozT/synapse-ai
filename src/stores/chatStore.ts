import { defineStore } from 'pinia';
import { ChatModel } from '@/models/chatModel';

export const useChatStore = defineStore('chat', {
  state: () => ({
    chats: [] as ChatModel[],
  }),
});
