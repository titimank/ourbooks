<template>
  <NavBar/>
  <the-loader v-if="showLoading"></the-loader>
  <div class="contrainer">
    <div class="row">
      <div class="col-md-12">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
import TheLoader from './components/TheLoader.vue';
import {mapState} from 'vuex';
export default {
  name: 'App',
  computed:{
    ...mapState({
      showLoading: state => state.showLoading
    }),
  },
  components: {
    NavBar,
    TheLoader,
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
  margin-top: 60px;
}
</style>
