<template>
    <div class="data">
        <h2>The repository from URL</h2>
        <p v-show="!getJson.length"><i>Please add some URL repository.</i></p>
        <ul>
            <li
                v-for="data in getJson"
                :key="data">
                {{ data }}
            </li>
        </ul>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'


    export default {
        name: "ShowURL",
        computed: {
            ...mapGetters([
                'getJson',
            ]),
            ...mapActions([
                'SAVE_DATA',
            ])
        }

    }

</script>

<style scoped>

</style>