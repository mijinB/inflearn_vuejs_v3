<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    // props validation 문법(type)
    props: {
        title: String,
    },
};
</script>