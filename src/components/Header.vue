<template>
    <div class="header-top">
        <p>{{ titre }}</p>
        <ul>
            <li><router-link to="/" exact>Accueil</router-link></li>
            <li><router-link to="/page1">Page1</router-link></li>
            <li><router-link to="/page2">Page2</router-link></li>
        </ul>
        <ul class="nav">
            <li class="btn btn-primary btn-nav"><router-link to="/" exact>Accueil</router-link></li>
            <li class="btn btn-primary btn-nav"><router-link to="/page1">Page1</router-link></li>
            <li class="btn btn-primary btn-nav"><router-link to="/page2">Page2</router-link></li>
            <li class="btn btn-primary btn-nav"><router-link to="/film">Film</router-link></li>
        </ul>
    </div>
</template>

<script>
//pour que Header communique avec une autre branche on importe le bus créé dans main.js
import {bus} from '../main'

export default {
    name: 'Header',
    data() {
        return{
            titre: 'Mon titre de base'
        }
    },
    beforeCreate(){
        console.log("il va être créé");
    },
    created(){
        console.log("le composant est créé");
        //c'est ici qu'on va pouvoir géré la methods recu de l'autre branche avec la paramètre created() quand le composant le composant est créé, allors on passe à l'écoute de l'évèvenement, ici le changeLeH1 de Film.vue
        bus.$on('changeLeH1', (data) =>{
            this.titre = data
        })
    },
    beforeMount(){
        console.log("il va être monté dans le DOM");
    },
    mounted(){
        console.log("il est intégré dans le DOM")
    },
    beforeUpdate(){
        console.log("il va se mettre à jour");
    },
    updated(){
        console.log("La composant s'est mis à jour");
    }
}
</script>
<style scoped>
    .header-top {
        position: fixed;
        top: 0;
        height: 50 px;
        background: #333;
        color: #f1f1f1;
        width: 100%;
        text-align: center;
        line-height: 50px;
        font-size: 25px;
    }
    /*cette classe est donné automatiquement par le routeur de Vue (voir la console). c'est la classe qui concerne la page actuellement visité*/
    .router-link-active{
        color: red;
    }
    .btn-nav{
        margin : 5px;
    }
    .btn-nav a{
        color: white;
    }
    .btn-nav a:hover{
        color: red;
    }
</style>
