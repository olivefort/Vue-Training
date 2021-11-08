<template>
    <div class="task card w-50">
        <p>{{ task }}</p>
        <button v-on:click="supTask" class="btn btn-danger">X</button>
    </div>
</template>
<script>
    export default {
        name: 'Todolist',
        props: ['task', 'supTask'],
        data(){
            return{
                
            }
        },
        methods:{

        }
}
</script>
<style scoped>

</style>