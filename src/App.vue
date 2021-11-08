<template>
  <div id="app">
    <contenu></contenu>
    <header-top></header-top>
    <router-view></router-view>
  </div>
</template>

<script>
import Contenu from './components/Contenu.vue'
import Header from './components/Header.vue'



export default {
  name: 'App',
  components: {
    'contenu' : Contenu,
    //ici on met header-top car header est réservé
    'header-top' : Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
