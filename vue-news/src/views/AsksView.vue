<template>
    <div>
        <div v-for="ask in fetchedAsks" v-bind:key="ask.id">{{ ask.title }}</div>
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
