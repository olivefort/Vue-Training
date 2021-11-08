<template>
    <div>
        <h1>La post numéro {{ id }}</h1>
        <div>
            <h2>{{ articleUnique.title}}</h2>
            <br>
            <p>{{ articleUnique.body}}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Post',
    data(){
        return{
            //ici on retour a id la valeur inscrit dans la route
            id: this.$route.params.id,
            articleUnique:[]
        }
    },
    mounted(){
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(reponse => {
            // console.log(reponse)
            // avec une boucle on prends toutes les données et on les insere dans le tableau
            this.articleUnique=reponse.data
        })
    }
}

</script>
<style>

</style>