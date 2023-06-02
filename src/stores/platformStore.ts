import { defineStore } from 'pinia';

interface State {
  appName: string | null,
  companyName: string | null,
}

export const usePlatformStore = defineStore('platform', {
  state: (): State => ({
    appName: null,
    companyName: null,
  }),
  actions: {
    definePlatform(appName: string, companyName: string) {
      this.appName = appName;
      this.companyName = companyName;
    },
  },
});
