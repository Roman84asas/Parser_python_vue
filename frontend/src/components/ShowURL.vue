<template>
    <div class="data">
        <h2>The repository from URL</h2>
        <p v-show="!GET_JSON.length"><i>Please add some URL repository.</i></p>
        <ul>
            <li
                v-for="(data, index) in GET_JSON"
                :key="index">
                {{ data }}
            </li>
        </ul>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'


    export default {
        name: "ShowURL",
        mounted: function (){this.$store.dispatch('SAVE_DATA')},
        computed: {
            ...mapGetters([
                'GET_JSON',
            ])
        }

    }

</script>

<style scoped>

</style>