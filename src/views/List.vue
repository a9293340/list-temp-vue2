<template>

</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    computed: {
        tableData () {
            return this.$store.state.tableData
        }
    },
    methods:{
        append(){
            // ... 取得新增的ruleForm參數
            // let obj = this.tableData.slice() 深拷貝一份
            // obj.push(ruleForm)
            // this.$store.dispatch('updateTableData',obj)

        }
    }
}
</script>

<style scoped>

</style>