import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
// import Vue from 'vue';
// import VueCompositionApi from '@vue/composition-api';

// Vue.use(VueCompositionApi);



const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
