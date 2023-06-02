import { defineStore } from 'pinia';
import { UserModel } from '@/models/userModel';

export const useUserStore = defineStore('user', {
  state: (): UserModel => ({
    id: null,
    name: null,
    profilePicture: null,
  }),
  getters: {
    loggedIn: (state): boolean => state.id !== null && state.id !== undefined,
    picturePlaceholder: (state): string | undefined => state
      .name?.toUpperCase().match(/\b\w/g)?.join(''),
  },
  actions: {
    login(user: UserModel): void {
      this.id = user.id;
      this.name = user.name;
      this.profilePicture = user.profilePicture;
    },
  },
});
