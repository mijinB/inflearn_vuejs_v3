<template>
    <div>
        <ul>
            <li v-for="{ item, index } in items" :key="index">
                {{ item }}
            </li>
        </ul>
        <button @click="$emit('renew')">renew items</button>
    </div>
</template>

<script>
export default {
    // props validation 문법(type, required)
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
}
</script>