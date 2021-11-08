<template>
    <div class="list1">
        <ul class="liste">
            <li v-for="(fruit, index) in fruits" v-bind:key="index">{{ fruit }}</li>
        </ul>
        <p> {{ prenom }} </p>
        <p> {{ nom }} </p>
        <p> {{ reversing() }} </p>
    </div>
</template>
<script>
    export default{
        name: 'Liste',
        data() {
            return {
                fruits: ['Orange','Fraise','Banane']
            }
        },
        //ici le props va signaler à Liste.vue qu'il va recevoir une data de son parent, de ce faite, on peut la gérer
        props:['prenom','nom'],
        //on gere donc 'prenom' qu'on a reçu grace a la props du dessus avec une method
        methods: {
            //creation d'une fonction
            reversing : function(){
                //on met le this car on considère que prenom est désormais une data dans Liste a par entière (this : pour cibler et utiliser les données dans data())
                //split pour séparer les lettres dans le format d'un tableau. reverse pour inverser l'ordre. join pour relier les données du tableau en chaine de caractère
                return this.prenom.split('').reverse().join('')
                //On peut aussi déclarer des props autrements !! Voir Liste2 !!
            }
        },
    }
    

</script>
<style scoped src='./Liste.css'>

</style>