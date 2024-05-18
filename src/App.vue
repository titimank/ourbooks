<template>
  <NavBar />
  <the-loader v-if="showLoading"></the-loader>
  <div class="contrainer">
    <div class="row">
      <div class="col-md-12">
        <div>
          <router-view></router-view>
          <div>{{ accessToken }}</div>
          <div>{{ UsersData }}</div>
          <div>{{ BooksData }}</div>
          <div>{{ BookIdData }}</div>
        </div>
      </div>
    </div>
  </div>


  <!-- <div>
    <section class="listbook-content">
       <ListBook/>
    </section>
  </div> -->

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
import TheLoader from './components/TheLoader.vue';
import {mapState} from 'vuex';
// import ListBook from './pages/ListBook.vue';
export default {
  name: 'App',
  data() {
    return {

//additional
      // books:[
      //   {bookName:"A" , bookAuthor:"Are "},
      //   {bookName:"B" , bookAuthor:"Bre "},


      // ],
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
    // ListBook,
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
        const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/donations`, {
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
        const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/donations/{id}`, {
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
        const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/donations`, {
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
        const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/donations/{id}`, {
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
        const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/donations/{id}`, {
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
    // this.getBookId()
    // this.postBookId()
    // this.putBookId()
    // this.deleteBookId()
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



/* *{
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

} */



</style>

<!-- /* 
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
    // }, */ -->