<script setup lang="ts">
import { PropType } from 'vue';
import { storeToRefs } from 'pinia';
import { AuthorType, MessageModel } from '@/models/messageModel';
import { useUserStore } from '@/stores/userStore';
import { usePlatformStore } from '@/stores/platformStore';

/**
 * Define the props for the component.
 */
const props = defineProps({
  message: {
    type: Object as PropType<MessageModel>,
    required: true,
  },
});

/**
 * Obtain the platform and user stores.
 */
const platformStore = usePlatformStore();
const userStore = useUserStore();

/**
 * Obtain the app name and username from their respective stores.
 */
const { appName } = storeToRefs(platformStore);
const { name } = storeToRefs(userStore);

/**
 * Define the chat class and author name.
 */
const chatClass = props.message?.author === AuthorType.Assistant ? 'chat-start' : 'chat-end';
const authorName = props.message?.author === AuthorType.Assistant ? appName : name;
const localeTime = props.message?.timestamp?.toLocaleTimeString('default', {
  hour: '2-digit',
  minute: '2-digit',
});
</script>

<template>
  <div class="chat" :class="chatClass">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img src="https://i.pravatar.cc/150?img=1" />
      </div>
    </div>
    <div class="chat-header">
      {{ authorName }}
      <time class="text-xs opacity-50">{{ localeTime }}</time>
    </div>
    <div class="chat-bubble">{{ message.content }}</div>
    <div class="chat-footer opacity-50">
      <!-- Empty for now -->
    </div>
  </div>
</template>

<style scoped>

</style>
