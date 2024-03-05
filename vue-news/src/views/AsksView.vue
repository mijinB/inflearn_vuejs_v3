<template>
    <div>
        <ul class="news-list">
            <li v-for="item in fetchedAsks" v-bind:key="item.id" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ item.points }}
                </div>
                <!-- 기타 정보 영역 -->
                <p class="news-title">
                    <router-link :to="`item/${item.id}`">
                        {{ item.title }}
                    </router-link>
                </p>
                <small class="link-text">
                    {{ item.time_ago }} by 
                    <router-link :to="`user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                </small>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        // 3.
        ...mapGetters([
            'fetchedAsks'
        ])

        // 2.
        // ...mapState({
        //     asks: state => state.asks
        // })

        // 1.
        // asks() {
        //     return this.$store.state.ask;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASKS');
    }
};
</script>

<style scoped>
.news-list {
    margin: 0;
    padding: 0;
}
.post {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    list-style: none;
}
.points {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 60px;
    color: #42b883;
}
.news-title {
    margin: 0;
}
.link-text {
    color: #828282;
}
</style>