<template>
    <ul id="v-for-object" class="data">
        <li v-for="value in showUrl" v-bind:key="[value]">
            {{ value }}
         </li>
    </ul>
</template>

<script>
    export default {
        name: "ShowURL",
        computed: {
            showUrl: function () {
                return this.$store.getters.genData()
            }
        }
    }
</script>

<style scoped>

</style>