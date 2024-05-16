import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './pages/LoginPage.vue';
import SignupPage from './pages/SignupPage.vue';
import FindPlace from './pages/FindPlace.vue';
import NotFound from './pages/NotFound.vue';
import UserPage from './pages/UserPage.vue';
import AddBook from './pages/AddBook.vue';



const routes = [
  { path: "/login", component: LoginPage },
  { path: "/signup", component: SignupPage },
  { path: "/place", component: FindPlace },
  { path: "/user", component: UserPage },
  { path: "/:pathMatch(.*)*", name: "notfound", component: NotFound },
  { path: '/addbook', component: AddBook },

];

const  router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;