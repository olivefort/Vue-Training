<template>
    <div>
        <h1>Voici la page 2</h1>
        <!-- @click = v-on:click -->
        <div class="btn btn-warning" @click="goDebut">Retour au début</div>
    </div>
</template>
<script>
export default {
    name: 'Page2',
    methods: {
        //ici cette methode va cibler le router du main.js le "$" est un avertissement qui précise que la données ne vient pas de data() du meme composant mais d'ailleurs de l'écosystème de Vue. Ici on demande donc au bouton de "push" vers "/" c'est a dire d'afficher la page d'accueil
        goDebut: function(){
            this.$router.push('/')
        }
    }
}

</script>
<style>

</style>