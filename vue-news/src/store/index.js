import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAsksList } from '@/api';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: []
    },
    getters: {
        fetchedAsks(state) {
            return state.asks;
        }
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ASKS(state, asks) {
            state.asks = asks;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => context.commit('SET_NEWS', response.data))
                .catch(error => console.log(error));
        },
        FETCH_JOBS({ commit }) {   //destruction
            fetchJobsList()
                .then(({ data }) => {
                    commit('SET_JOBS', data)
                })
                .catch(error => console.log(error));
        },
        FETCH_ASKS({ commit }) {
            fetchAsksList()
                .then(({ data }) => {
                    commit('SET_ASKS', data)
                })
                .catch(error => console.log(error));
        }
    }
})