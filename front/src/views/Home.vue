<template>
  <div class="home mt-5">
    <b-container  class="bv-example-row">
      <b-row>
          <SearchUser />
          <b-table striped hover :items="normalizeUsers" :fields="fields"></b-table>
          <Pagination :usersByPage="normalizeTotalPages" />
      </b-row>
    </b-container>  
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Pagination from '../components/Pagination.vue';
import SearchUser from '../components/SearchUser.vue';
// import api from '../services/api';
import moment from 'moment';


export default {
  name: 'Home',
  components: {
    // HelloWorld
    Pagination,
    SearchUser
  },
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
        users: null,
        fields: [
          {
            label: 'Nome do Cliente',
            key: 'name',
            sortable: true
          },
          {
            label: 'E-mail',
            key: 'email',
            sortable: true
          },
          {
            label: 'Valor',
            key: 'price',
            sortable: true

          },
          {
            label: 'Desde',
            key: 'since',
            sortable: true
          }
        ]
    }
  },
  computed: {
    normalizeUsers() {
      const userData = this.$store.getters['users'];

      if(userData) {
        userData.forEach((value) => {
          value.price = value.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          value.since = moment(value.since).format('L');
        })
      }


      return userData;
    },
    normalizeTotalPages() {
      const totalPagesData = this.$store.getters['totalPages'] ? this.$store.getters['totalPages'] : 0;
    
      return totalPagesData;
    }
  },
  methods: {
    async getUsers() {
      
      this.$store.dispatch('getUserByPage', 1);

    
    }
  },
  created() {
    this.getUsers();
  }

}
</script>


<style  scoped>
  input:focus {
        outline-offset: 0px;
    }
   
    :focus {
        outline: -webkit-focus-ring-color auto 0px;
        outline-offset: 0px;
    }
</style>
