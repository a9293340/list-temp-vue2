<template>

</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data(){
        return{
            nowID: this.$route.params.id
        }
    }
}
</script>

<style scoped>

</style>