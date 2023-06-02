<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';

defineProps({
  appName: {
    type: String,
    required: true,
  },
});

const userStore = useUserStore();
const { name, profilePicture } = storeToRefs(userStore);

userStore.login({
  id: 1,
  name: 'John Doe',
  profilePicture: 'https://i.pravatar.cc/150?img=1',
});
</script>

<template>
  <div class="navbar bg-base-300 rounded-box">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">
        <div class="font-title inline-flex
         text-lg transition-all duration-200 md:text-xl">
          <span class="capitalize">{{ appName }}</span>
          <span class="text-base-content uppercase text-primary">AI</span>
        </div>
      </a>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img :src="profilePicture" />
          </div>
        </label>
        <ul tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
          <li><a>Profile</a></li>
          <li><a>Settings</a></li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
