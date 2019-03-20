<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <ShowURL/>
    </div>

</template>



<script>
    import ShowURL from './ShowURL.vue'
    //import InputURL from './InputURL.vue'

    export default {
        name: 'Home',
        components: {
            ShowURL
        },
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
