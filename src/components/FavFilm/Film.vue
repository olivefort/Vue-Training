<template>
    <div>
        <ul class="listfilm">
            <li v-for="(film, index) in myArr" v-bind:key="index" class="mt-2">
                <div class="film card">
                    <div class="card-body">
                        Titre : {{ film.titre }}
                        <br>
                        Année : {{ film.date }}                
                    </div>
                </div>
            </li>
            <p>{{ text }}</p>
            <!--ici le v-on se refere au methods creer plus bas--->
            <button v-on:click='suppFilm' class="btn btn-danger m-2">Effacer Film</button>
            <button v-on:click='suppTxt' class="btn btn-danger m-2">Effacer Texte</button>
            <button v-on:click='changeTitre' class="btn btn-danger m-2">Modifier le Titre</button>
            <button v-on:click='changeH1' class="btn btn-danger m-2">Modifier le H1</button>
            <!-- les balises slot vont servir à afficher le contenu dans les balises composant dans le parent (ici nous somme dans Film.vue donc s'il y a du contenu dans les balises <film></film> dans Contenu.vue. S'il il n'y a rien dans les balise alors cela affichera ce qu'il y a dans les balise <slot></slot> (ici ca affichera "Envoyé" par defaut-->
            <slot>Envoyé</slot>
            <!-- meme principe mais avec plus d'élément dans le parent on va donc mttre un name avec "info" qui se refere au v-slot dans le parent -->
            <slot name="info"></slot>
            <!-- -->
        </ul>
    </div>
</template>
<script>
    //pour que Film communique avec une autre branche on importe le bus créé dans main.js
    import {bus} from '../../main'

    export default{
        name: 'Film',
        data() {
            return {

            }
        },
        props:['myArr', 'text'],      
        methods: {
            suppFilm: function(){
                this.myArr.pop()
            },
            suppTxt: function(){
                this.text = ''
            },
            changeTitre: function(){
                //.$emit va nous servir à faire des changement directement vers le composant parent à l'inverse des props, on lui donne 2 paramètres, le premier est le nom de l'évènement qui sera en liens vers le parent (le v-on:changeTitle dans Contenu.vue), et le deuxieme, ce que l'on veut envoyer comme valeur, ici un string. Vu qu'il s'agit de l'enfant direct, on precede avec juste un this
                this.$emit('changeTitle','Mon Nouveau Titre')                
            },
            changeH1: function(){
                //dans ce deuxième cas il s'agit d'un changement vers une toute autre branche qui n'a rien a voir avec la relation parent/enfant, il s'agit d'un "bus" qui est importer un peu plus haut. le principe reste le même à ce niveau là sur la methods et sa fonction avec les 2 paramètres, mise à part qu'il ne s'agit plus d'un this mais d'un bus au début
                bus.$emit('changeLeH1','Titre changé avec le bus')
            }

        },
    }
</script>

<style scoped src='./Film.css'></style>
