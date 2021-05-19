<template>

   <ul v-if="normalizeTotalPage > 1">
            <li v-for="pagina in normalizePages" :key="pagina">
              <span @click.prevent="getPag" >{{pagina}}</span>  
            </li>

    </ul>
  
</template>

<script>
    export default {
        name: 'Pagination',
        props: {
            usersByPage: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                paginasTotal: 2,
                paginasRecorte: [1,2,3],
                perPage: 3,
                currentPage: 1,
                pagesCount: []
                
            }
        },
        methods: {
            getPag(event) {
                
                this.$store.dispatch('getUserByPage', event.target.textContent);
            }
        },
        computed: {
            normalizeTotalPage() {
                let totalPage = this.usersByPage;

                return totalPage;
            },
            normalizePages() {

                let arrayPages = [];

                for (let index = 1; index <= this.usersByPage; index++) {
                    
                    arrayPages.push(index);
                   
                }

                

                return arrayPages;
            }
        }
    
    }
</script>

<style scoped>
    /* .pag {
        margin: 0 auto;
        width: auto;
    } */

    ul {
        grid-column: 1 / -1;
    }
    li {
        display: inline-block;
    }
    li span {
        padding: 2px 8px;
        border-radius: 2px;
        margin: 4px;
        cursor: pointer;
    }
    li span.router-link-exact-active,
    li span:hover {
        background: #87f;
        color: white;
    }
</style>