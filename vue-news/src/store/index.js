import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: [],
        user: {}
    },
    getters: {
        fetchedAsks(state) {
            return state.asks;
        }
    },
    mutations,
    actions
})