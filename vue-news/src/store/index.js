import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        list: [],
        user: {},
        item: {},
    },
    getters: {
        fetchedAsks(state) {
            return state.asks;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    actions
})