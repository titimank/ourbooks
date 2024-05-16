<template>
  <NavBar />
  <the-loader v-if="showLoading"></the-loader>
  <div class="contrainer">
    <div class="row">
      <div class="col-md-12">
        <div>
          <router-view></router-view>
          <div>{{ accessToken }}</div>
          <hr>
          <div>{{ UsersData }}</div>
          <hr>
          <div>{{ BooksData }}</div>
          <hr>
          <div>{{ BookIdData }}</div>
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
  data() {
    return {
      PostBookIdData: null,
      BooksData: null,
      BookIdData: null,
      PutBookData: null,
      DeleteBookData: null,
      accessToken: null
      // UsersData: null,
    };
  },
  computed: {
    ...mapState({
      showLoading: state => state.showLoading
    }),
  },
  components: {
    NavBar,
    TheLoader,
  },
  methods: {
    // const accessToken = decodeURIComponent(),
    getAccessToken() {
      let cookieName = encodeURIComponent("access-token")
      let cookieStart = document.cookie.indexOf(cookieName)
      let cookieEnd
      if(cookieStart > -1) {
        cookieEnd = document.cookie.indexOf(';', cookieStart)
      }
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length
      }
      this.accessToken = document.cookie.substring(cookieStart + cookieName.length+1, cookieEnd)
    },
    async getAllBooks() {
      console.log(process.env.VUE_APP_API_URL);
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/books`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,  // Add your token here
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          return "error";
        }
        const data = await response.json();
        console.log(data);
        this.BooksData = data;
      } catch (error) {
        return "catch";
      }
    },
    async getBookId() {
      console.log(process.env.VUE_APP_API_URL);
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/books/{id}`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,  // Add your token here
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          return "error";
        }
        const data = await response.json();
        console.log(data);
        this.BookIdData = data;
      } catch (error) {
        return "catch";
      }
    },
    async postBookId() {
      console.log(process.env.VUE_APP_API_URL);
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/books`, {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,  // Add your token here
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          return "error";
        }
        const data = await response.json();
        console.log(data);
        this.PostBookIdData = data;
      } catch (error) {
        return "catch";
      }
    },
    async putBookId() {
      console.log(process.env.VUE_APP_API_URL);
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/books/{id}`, {
          method: "PUT",
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,  // Add your token here
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          return "error";
        }
        const data = await response.json();
        console.log(data);
        this.PutBookData = data;
      } catch (error) {
        return "catch";
      }
    },
    async deleteBookId() {
      console.log(process.env.VUE_APP_API_URL);
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/books/{id}`, {
          method: "DELETE",
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,  // Add your token here
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          return "error";
        }
        const data = await response.json();
        console.log(data);
        this.DeleteBookData = data;
      } catch (error) {
        return "catch";
      }
    },
  },
  created() {
    this.getAccessToken()
    // this.getAllUsers()
    this.getAllBooks()
    this.getBookId()
    this.postBookId()
    this.putBookId()
    this.deleteBookId()
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


    // async getAllUsers() {
    // console.log(process.env.VUE_APP_API_URL);
    // try {
    // const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/users`, {
    // method: "GET",
    // headers: {
    // 'Authorization': `Bearer ${this.accessToken}`, // Add your token here
    // 'Content-Type': 'application/json'
    // }
    // });
    // if (!response.ok) {
    // return "error";
    // }
    // const data = await response.json();
    // console.log(data);
    // this.UsersData = data;
    // } catch (error) {
    // return "catch";
    // }
    // },