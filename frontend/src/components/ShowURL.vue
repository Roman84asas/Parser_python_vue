<template>
    <div class="data">
        <h2>The repository from URL</h2>
        <p v-show="!Object.keys(GET_JSON).length">
            <i>Please add some URL repository.</i>
        </p>
        <ul>
            <li
                v-for="datas in GET_JSON"
                :key="datas.id">
                {{ datas.body }}
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