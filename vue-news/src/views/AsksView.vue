<template>
    <div>
        <p v-for="ask in fetchedAsks" v-bind:key="ask.id">
            <router-link :to="`item/${ask.id}`">
                {{ ask.title }}
            </router-link>
            <small>{{ ask.time_ago }} by {{ ask.user }}</small>
        </p>
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
