import Vue from 'vue';
import VueRouter from 'vue-router';

import createListView from '@/views/CreateListView';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',   //url에 hash값 제거됨
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url주소
      path: '/news',
      name: 'news',
      //component: url 주소로 갔을 때 표시될 컴포넌트
      component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AsksView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
    },
    {
      path: '/user/:id',   //동적 라우팅
      component: UserView,
    },
    {
      path: '/item/:id',   //동적 라우팅
      component: ItemView,
    }
  ]
})