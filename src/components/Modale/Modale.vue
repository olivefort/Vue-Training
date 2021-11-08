<template>
  <div class="bloc-modale" v-if="reveal">
    <div class="overlay" v-on:click="togMod"></div>
    <div class="modale card">
        <div class="btn-modale btn btn-danger" v-on:click="togMod">X</div>
        <h2>Le contenu de ma modale</h2>
    </div>
  </div>
</template>
<script>


export default {
    name: 'Modale',
    data() {
        return{
            
        }
    },
    props:['reveal','togMod']


}
</script>
<style scoped>
    .bloc-modale{
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        inset: 0;
    }
    .modale{
        background: #f1f1f1;
        color: #333;
        padding: 50px;
        position: fixed;
    }
    .btn-modale{
        position: absolute;
        top: 10px;
        right: 10px;
    }

</style>
