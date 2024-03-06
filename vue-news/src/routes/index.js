import Vue from 'vue';
import VueRouter from 'vue-router';

import createListView from '@/views/CreateListView';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import bus from '../utils/bus';
import { store } from '../store/index'

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
      component: createListView('NewsView'),
      beforeEnter: (to, from, next) => {
        // #1
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
            .then(() => {
                console.log('fetched');
                bus.$emit('end:spinner');
                next();
            })
            .catch(error => console.log(error));
        // console.log('to', to);   이동할 url의 라우팅 정보(news)
        // console.log('from', from);   현재 url의 라우팅 정보(asks에서 news로 이동했을 시, asks)
        // console.log('next', next);   function(beforeEnter라는 것은 next를 호출해줘야만 라우트 이동이 된다. next 호출을 안 하면 메뉴 클릭해도 이동x)
      }
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