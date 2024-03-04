<template>
    <div>
        <div v-for="ask in asks" v-bind:key="ask.id">{{ ask.title }}</div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            asks: state => state.asks
        })
        // asks() {
        //     return this.$store.state.ask;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASKS');
    }
};
</script>
