<template>
    <input met v-model="accountURL" placeholder="Enter URL GitHub Account"/>
    <button @click="enter">Send</button>
</template>

<script>
    export default {
        name: "InputURL"
    }
</script>

<style scoped>

</style>