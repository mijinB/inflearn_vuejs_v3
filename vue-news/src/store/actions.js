import { fetchList, fetchUserInfo, fetchCommentItem } from '@/api';

export default {
    // promise
    /* FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(response => {
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(error => console.log(error));
    }, */
    // async
    async FETCH_LIST({ commit }, pageName) {
        try {
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;
        } catch(error) {
            console.log(error);
        }
    },

    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data)
            })
            .catch(error => console.log(error));
    },
    FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
            .then(({ data }) => {
                commit('SET_ITEM', data)
            })
            .catch(error => console.log(error));
    },
}