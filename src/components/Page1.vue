<template>
    <div>
        <h1>Les articles de blog !</h1>
        <hr>
        <ul>
            <li v-for="(article, index) in allArticles" v-bind:key="index">
                <!-- link pour aller vers le post directement en utilisant l'index de la boucle de facon dynamique-->
                <router-link v-bind:to="`/blogpost/${index + 1}`">
                    <div class="card m-2">
                    <h3>{{ article.title }}</h3>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Page1',
    data(){
        return{
            allArticles: []
        }
    },
    created(){
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(reponse => {
            // console.log(reponse)
            // avec une boucle on prends toutes les données et on les insere dans le tableau
            for(const blogPost of reponse.data){
                this.allArticles.push(blogPost)
            }
        })
    }
}

</script>
<style>

</style>