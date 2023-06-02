<script setup lang="ts">
import {
  ChatBubbleLeftIcon, MicrophoneIcon, PaperAirplaneIcon, PlusIcon, TrashIcon,
} from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { usePlatformStore } from '@/stores/platformStore';
import { ChatModel } from '@/models/chatModel';
import { useChatStore } from '@/stores/chatStore';
import { AuthorType, MessageModel } from '@/models/messageModel';
import MessageComponent from "@/components/MessageComponent.vue";

/**
 * Obtain the app name and company name from the store.
 */
const { appName } = usePlatformStore();

/**
 * Chat visualisation variables.
 */
const currentChatId = ref<number>(0);
// const currentChat = ref<ChatModel>({} as ChatModel);

const currentMessage = ref<string>();
const isVoiceActive = ref<boolean>(false);

/**
 * Speech recognition native browser API.
 */
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = navigator.language || 'en-US';
recognition.continuous = false;
recognition.interimResults = true;

/**
 * Start the speech recognition.
 */
recognition.onstart = () => {
  isVoiceActive.value = true;
};

/**
 * Update the chat message with the speech recognition result.
 * Get the transcript from the result.
 * @param event - Speech recognition event.
 */
recognition.onresult = (event) => {
  const current = event.resultIndex;
  const { transcript } = event.results[current][0];
  currentMessage.value = transcript;
};

/**
 * Stop the speech recognition when the user stops speaking.
 */
recognition.onend = () => {
  isVoiceActive.value = false;
  // eslint-disable-next-line no-use-before-define
  sendMessage();
};

/**
 * Toggle the speech recognition.
 * If the speech recognition is active, stop it.
 */
const toggleVoice = () => {
  if (isVoiceActive.value) {
    recognition.stop();
  } else {
    recognition.start();
  }
};

/**
 * Mock data for the chat history.
 */
const chatStore = useChatStore();
const { chats } = storeToRefs(chatStore);

const chat1: ChatModel = {
  id: 1,
  userId: 1,
  name: 'Chat 1',
  messages: [
    {
      id: 1,
      chatId: 1,
      author: AuthorType.Assistant,
      content: 'You were the Chosen One!',
      timestamp: new Date(),
    },
    {
      id: 2,
      chatId: 1,
      author: AuthorType.User,
      content: 'I hate you!',
      timestamp: new Date(),
    },
  ],
};

chats.value.push(chat1);

/**
 * Get the chat history for the current chat.
 * @param chatId - Chat ID.
 */
const getChatHistory = (chatId: number) => {
  currentChatId.value = chatId;
  return chats.value.find((chat) => chat.id === chatId) as ChatModel;
};

/**
 * Send a message to the current chat.
 */
const sendMessage = () => {
  if (currentMessage.value) {
    const currentChat = getChatHistory(currentChatId.value);

    const message: MessageModel = {
      id: currentChat.messages.length + 1,
      chatId: currentChatId.value,
      author: AuthorType.User,
      content: currentMessage.value,
      timestamp: new Date(),
    };

    currentChat.messages.push(message);
    currentMessage.value = ''; // Clear the input field
  }
};

currentChatId.value = 1;
</script>

<template>
  <div class="flex flex-col w-full lg:flex-row">
    <div class="card card-compact w-full lg:w-1/5 overflow-auto bg-base-200">
      <div class="card-body">
        <button class="btn btn-outline btn-base gap-2">
          <plus-icon class="h-5 w-5" />
          New chat
        </button>
        <div class="divider"></div>
        <button class="btn flex justify-between btn-active no-animation">
          <chat-bubble-left-icon class="h-5 w-5" />
          <span class="normal-case">Chat 1</span>
          <trash-icon class="h-5 w-5 hover:text-primary-content" />
        </button>
      </div>
    </div>
    <div class="divider lg:divider-horizontal"></div>
    <div class="card w-full lg:w-5/6 bg-base-200">
      <div class="card-body overflow-auto">
        <!-- Chat messages -->
        <div v-if="currentChatId > 0 && getChatHistory(currentChatId)">
          <div v-for="message in getChatHistory(currentChatId).messages" :key="message.id">
            <message-component :message="message" />
          </div>
        </div>
        <div v-else>
          NO MESSAGES
        </div>
      </div>
      <!-- End chat messages -->
      <div class="divider"></div>
      <div class="card-actions px-4 py-4">
        <div class="form-control w-full">
          <div class="input-group justify-center">
            <button class="btn btn-square" @click="toggleVoice">
              <microphone-icon class="h-5 w-5" />
            </button>
            <input type="text" placeholder="Send a message..."
                   class="input input-bordered w-5/6"
                   v-model="currentMessage"
            >
            <button class="btn btn-square" @click="sendMessage">
              <paper-airplane-icon class="h-5 w-5" />
            </button>
          </div>
          <label class="label justify-center">
            <span class="label-text-alt">
              {{ appName }} uses OpenAI language processing services
              which may produce inaccurate information about people, places or events.
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
