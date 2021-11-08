
<template>
    <div class="container mt-5">
        <h1>{{ titre }}</h1>
        <list v-bind:prenom="prenom" :nom="nom"></list>
        <p>
            {{ txt }}
        </p>
        <liste-2 v-bind:hello="hello" :nom="nom"></liste-2>
        
        <!-- ici on va donc récupérer avec v-on:changeTitle ce le nom de l'évènement veut nous envoyé avec son argument-->
        <film :myArr="myArr" :text="text" v-on:changeTitle="changementTitre($event)">
            <!-- ici référence au 1er slot-->
            <p>Coucou du slot</p>
            <!-- ici référence au 2eme slot avec un v-slot-->
            <template v-slot:info>
                <h1>Le contenu du Slot</h1>
            </template>
        </film>
        <!-- en doublant la liste ci dessus, on peut voir que le bouton de suppression de film va supprimer dans toute les listes d'un coup mais pas pour le bouton de suppression de texte qui lui va supprimer que le texte de sa propre liste ! La est la différence entre les valeur primitive et refererenciel -->
        <!-- <film :myArr="myArr" :text="text"></film>-->
        <!-- Systeme d'onglet simple avec methods true/false -->
        <button class="btn btn-outline-primary me-5" v-on:click="tog1">Onglet 1</button>
        <button class="btn btn-outline-primary" v-on:click="tog2">Onglet 2</button>
        <div class="txt card my-5" >
            <text1 class="p-3" v-if="toggle1"></text1>
            <text2 class="p-3" v-if="toggle2"></text2>
        </div>   
        <!-- Systeme d'onglet avec composants dynamique --> 
        <button class="btn btn-outline-primary me-5" v-on:click="compo = 'text1'">Onglet 1</button>
        <button class="btn btn-outline-primary" v-on:click="compo = 'text2'">Onglet 2</button>
        <div class="txt card my-5" >
            <component class="p-5" v-bind:is="compo"></component>
        </div>
        <!-- Partie Modale -->
        <mymodale v-bind:reveal="reveal" v-bind:togMod="togMod"></mymodale>
        <div class="btn btn-success" v-on:click="togMod">Open Modale</div><br>
        <!-- Appel a une API -->
        <img :src="urlImg"><br>
        <!-- Formulaire -->
        <form>
            <div class="form-group">
                <label for="pseudo">Ton pseudo</label>
                <!-- ici le .lazy va permetre d'insérer la valeur une fois que l'utilisateur cliquera en dehors de la zone de texte -->
                <!-- pour ce qui est di v-on:input, il s'agit d'une methode pour éviter de changer les valeurs des input après la soumission du formulaire (il n'est que sur le pseudo mais peut etre placé partout de la même manière)-->
                <input type="text" id="pseudo" class="form-control" v-model.lazy="formData.pseudo" v-on:input="toggleResult">
            </div>
            <div class="form-group">
                <label for="age">Ton age</label>
                <!-- ici le .number va permetre de retourner un type number à la valeur (test: ajouter +7 à la ligne 81 -> formData.age+7 et regarde le résultat avec et sans le .number ) -->
                <input type="number" id="age" class="form-control" v-model="formData.age">
            </div>
            <div class="form-group">
                <label for="texte">Ton texte</label>
                <textarea id="texte" class="form-control" v-model="formData.texte"></textarea>
            </div>
            <h3>Les selectbox</h3>
            <select v-model="formData.select">
                <option v-bind:key="index" v-for="(pays, index) in formData.listePays">{{ pays }}</option>
            </select>
            <h3>Les checkbox</h3>
            <div class="form-check w-25">
                <label for="fraise">Fraise</label>
                <input type="checkbox" class="form-check-input" value="fraise" id="fraise" v-model="formData.checkFruit">
            </div>
            <div class="form-check w-25">
                <label for="pomme">Pomme</label>
                <input type="checkbox" class="form-check-input" value="pomme" id="pomme" v-model="formData.checkFruit">
            </div>
            <div class="form-check w-25">
                <label for="banane">Banane</label>
                <input type="checkbox" class="form-check-input" value="banane" id="banane" v-model="formData.checkFruit">
            </div>
            <!-- bouton de soumission du formulaire-->
            <button v-on:click.prevent="envoiForm" class="btn btn-primary mt-3">Envoyer</button>
        </form>
        <br>
        <div v-if="infoSubmit">
            <h2>Résultat</h2>
            <div class="card p-3">
                <p>Pseudo : {{ formData.pseudo }}</p>
                <p>Age : {{ formData.age }}</p>
                <!-- le style permet de conserver le retour à la ligne -->
                <p style="white-space: pre">Texte : {{ formData.texte }}</p>
                <p>Résultats Checkbox</p>
                <ul>
                    <!-- ici la boucle for va permettre de prendre la valeur du fruit selectionner par la checkbox et al reporter dans le tableau checkFruit -->
                    <li v-bind:key="index" v-for="(fruit, index) in formData.checkFruit">{{ fruit }}</li>
                </ul>
                <p>choix du select : {{ formData.select }}</p>
            </div>
        </div>
        <h2>ToDo List</h2>
        <h3>Rentrez vos choses à faire.</h3>
        <form>
            <div class="form-group">
                <label for="taskInput">Action</label>
                <input v-model="formuData.taskData" type="text" id="taskInput" class="form-control">
            </div>
            <button v-on:click.prevent='ajoutTask' class="btn btn-primary">Créer une tache</button>
        </form>
        <ul class="taskList">
            <li v-for="(task,index) in taskTab" v-bind:key="index" class="mt-2">
            <!-- on colle le numéro de l'index à l'id de chaque élément du tableau avec v-bind:id="index"-->
                <todo v-bind:task="task" v-bind:id="index" v-bind:supTask="supTask"></todo>
            </li>
        </ul>        
    </div>
</template>

<script>
    import Liste from './Liste/Liste.vue';
    import Liste2 from './Liste2/Liste2.vue';
    import Film from './FavFilm/Film.vue';
    import Texte1 from './Texte1.vue';
    import Texte2 from './Texte2.vue';
    import Modale from './Modale/Modale.vue';
    import axios from 'axios';
    import Todolist from './Todolist.vue'


    export default{
        name: 'Contenu',
        data() {
            return {
                txt: 'je suis le contenu',
                prenom : 'Olive',
                nom : 'Fort',
                hello : function(){
                    console.log('Hello depuis le parent !')
                },
                //avec valeurs référenciel
                myArr : [
                    {titre: 'Blues Brother', date: 1982},
                    {titre: 'Les Evadés', date: 1994},
                    {titre: 'Kaamelott', date: 2021},
                ],
                //avec valeur primitive ('string / number / boolean')
                text : 'Hello World',
                titre : 'Mon super Titre',
                toggle1: true,
                toggle2: false,
                compo : 'text1',
                reveal : false,
                urlImg : null,
                //a partir du moment on on créé un formulaire, il est conseillé de créé les data sous forme d'objet
                formData:{
                    pseudo: '',
                    texte: '',
                    age:  '',
                    checkFruit:[],
                    select: '',
                    listePays: ['Brésil','Japon','Thailand','Chine']             
                }, 
                infoSubmit: false,
                formuData:{
                    taskData:''
                },
                taskTab: ['JavaScrip','React','Tailwind','Vue'],
            }
        },
 
        methods:{
            // création de la fonction qui va mettre en place le changement demandé par l'élément bouton de l'enfant
            changementTitre: function(nvTitre){
                this.titre = nvTitre;
            },
            tog1: function(){
                this.toggle1 = true
                this.toggle2 = false
            },
            tog2: function(){
                this.toggle1 = false
                this.toggle2 = true
            },
            togMod: function(){
                this.reveal = !this.reveal
            },
            envoiForm:function(){
                this.infoSubmit = true;
            },
            toggleResult:function(){
                this.infoSubmit = false;
            },
            ajoutTask:function(){
                //cette methode va insérer la valeur de l'input dans le tableau
                this.taskTab.push(this.formuData.taskData)
                //ici ca va vider l'input après envoi de la valeur                
                this.formuData.taskData = ''
            },
            supTask:function(e){
                console.log(e.target.parentNode.id)
                //e.target.parentNode.id : on cible l'element clicker et on recupere l'id de son noeud parent. la fonction est lié au bouton de suppression avec le target.parentNode on cible son parent et donc la div a qui on lui a mis v-bind:id="index"
                //le splice va enlever un élément du tableau et son argument est donc l'élément ciblé avec le target, le 1 est le nombre d'élément a enlever
                //Cette méthode marche grace au Framework qui va changer les data dynamiquement ! Les id des éléments changeront directement même après la suppression de l'un d'eux... Exemple si je supprime Tailwind qui a l'id 2 , Vue deviendra le nouvel id 2, il ne restera pas sur le 3 !! 
                //Lifecircle ! Les composant vont se démonter et se remonter en fonction des changements des données
                this.taskTab.splice(e.target.parentNode.id, 1)
            }
        },
        components: {
            'list' : Liste,
            'liste-2' : Liste2,
            'film' : Film,
            'text1' : Texte1,
            'text2' : Texte2,
            'mymodale' : Modale,
            'todo' : Todolist
        },
        //propriété mounted pour intégrer dans le dom l'api axios
        mounted(){
            axios
            //ici on va chercher
            .get('https://api.thecatapi.com/v1/images/search')
            //et quand on prend on attend la réponse
            .then(reponse =>{
                console.log(reponse);
                this.urlImg = reponse.data[0].url
            })
        }
    }

</script>
<style>
    h1{
        margin-top:  100px !important;
    }
    .txt{
        padding: 1rem;
        height: 250px;
    }
    .taskList{
        list-style: none;
    }
</style>