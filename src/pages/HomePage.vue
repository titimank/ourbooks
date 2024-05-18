<template>
  
  <div>
    <!-- <ListBook :books="books" /> -->
    <section class="listbook-content">
       <ListBook/>
    </section>
  </div>
</template>

<script>
import ListBook from './ListBook.vue';
export default {
  name: 'App',
    data() {
        return {
        //additional
            books:[],
        };
    },
    components: {
    ListBook,
  },
};


</script>

<style>
*{
    box-sizing: border-box;
}
body{
    margin: 0;
}
.listbook-content{
  box-shadow: 0 2px 8px rgb(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10 px ;
  padding: 1rem;
  text-align: center;

}


</style>