<template>
    <div>
        <p> {{ nom }} </p>
        <p> {{ hello() }} </p>
    </div>
</template>
<script>
    export default{
        name: 'Liste2',
        data() {
            return {

            }
        },
        //voici l'autre facon de déclarer une props
        props: {
            nom: {
                //Validation d'une props qui consiste à préciser la nature de la donnée qu'on veut recevoir, ici on précise que l'on attend une chaine de caractere
                type : String
            },
            hello:{
                type: Function
            }

        },        
    }
</script>

<style>
</style>