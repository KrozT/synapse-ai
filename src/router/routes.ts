import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home-view',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'chat',
        name: 'chat-view',
        component: () => import('@/views/ChatView.vue'),
      },
      {
        path: 'register',
        name: 'register-view',
        component: () => import('@/views/RegisterView.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      path: '/',
      name: 'home-view',
    },
  },
];

export default routes;
