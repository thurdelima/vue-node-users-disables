<template>

   <form action="" >
       <input type="text" name=""  id="busca" v-model="busca" placeholder="Buscar...">
        <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarProdutos">
        <!--{{busca}} -->
   </form>
  
</template>

<script>
   
   
   export default {
        name: 'SearchUser',
        props: {
            
        },
        data() {
            return {
                busca: ""
                
            }
        },
        methods: {
             buscarProdutos() {

                this.$store.dispatch('getUser', this.busca);
            }
        },
        computed: {
            
        }
    
    }
</script>

<style scoped>
    /* .pag {
        margin: 0 auto;
        width: auto;
    } */

    form {
     max-width: 600px;
     margin: 15px auto 30px auto;
     position: relative;
    
 }
 #busca {
     width: 100%;
     padding: 20px;
     border: none;
     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

 }
 #busca:focus,
 #busca:hover {
    
     /* transform: scale(1.1); */
     
 }
 #lupa {
     width: 62px;
     height: 62px;
     background: url("../assets/search.svg") no-repeat center center;
     text-indent: -150px;
     border: none;
     cursor: pointer;
     position: absolute;
     top: 0px;
     right: 0px;
     box-shadow: none;
 }

 input:focus {
        outline-offset: 0px;
    }
   
    :focus {
        outline: -webkit-focus-ring-color auto 0px;
    }

  
</style>