import { fetchNewsList, fetchJobsList, fetchAsksList } from '@/api';

export default {
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