import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import pinia from '@/stores';

/**
 * Create the Vue app instance.
 */
const app = createApp(App);

/**
 * Mount the Vue router to the app.
 */
app.use(router);

/**
 * Mount the Pinia store to the app.
 */
app.use(pinia);

/**
 * Mount the app to the DOM.
 */
app.mount('#app');
