<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <h3>ADD BOOK</h3>
      </div>
      <form @submit.prevent="onAddBook()">
        <!-- <div class="form-group">
                <label>Categoty</label>
                <select v-model='donationCategory'  >
                    <option selected value="">Donates</option>
                    <option>Accept donations</option>
                </select>
        </div> -->

        <hr />

        <!-- <div class="alert alert-danger" v-if="error">{{ error }}</div> -->
        <!-- <form @submit.prevent="onSignup()"> -->
        <!-- <form @submit.prevent="onAddBook()"> -->

        <!-- อัพรูป -->
        <!-- <div class="form-group">
                <label>Book Image</label>
                <input type="file" @change="onFileChange" />
                <div class="error" v-if="error.bookImage">{{ error.bookImage }}</div>

            </div> -->

        <div class="form-group">
          <label>Book Name</label>
          <input type="text" v-model.trim="bookName" />
          <div class="error" v-if="error.bookName">{{ error.bookName }}</div>
        </div>
        <div class="form-group">
          <label>Author</label>
          <input type="text" v-model.trim="bookAuthor" />
          <!-- <div class="error" v-if="error.bookAuthor">{{ error.bookAuthor }}</div> -->
        </div>
        <div class="form-group">
          <label>Categoty</label>
          <select v-model="bookCategory">
            <option disabled value="">Please select one</option>
            <option>Fantacy</option>
            <option>Fiction</option>
            <option>Romance</option>
            <option>Cartoon</option>
            <option>Mystery</option>
            <option>Horror</option>
            <option>Thriller</option>
            <option>History</option>
            <option>Comic</option>
            <option>Textbook</option>
            <option>Magazine</option>
            <option>Storybook</option>
          </select>
          <div class="error" v-if="error.bookCategory">
            {{ error.bookCategory }}
          </div>
        </div>

        <!-- <div class="error" v-if="error"bookAuthor">{{ error"bookAuthor }}</div> -->
        <!-- </div> -->
        <div class="form-group">
          <label>Description</label>
          <input type="text" v-model.trim="bookDesc" />
          <!-- <div class="error" v-if="error.bookDesc">{{ error.bookDesc }}</div> -->
        </div>
        <div class="form-group">
          <label>Condition</label>
          <input type="text" v-model.trim="bookCon" />
          <!-- <div class="error" v-if="error.bookCon">{{ error.bookCon }}</div> -->
        </div>
        <div class="my-3">
          <button type="submit" class="btn btn-primary">Submit</button>
          &puncsp;
          <button type="button" @click="resetForm" class="btn btn-primary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { watch } from 'vue';
import AddbookValidations from "@/services/AddbookValidations";
// import Validations from '@/services/Validations';
import { mapActions, mapMutations } from "vuex";
import {
  LOADING_SPINNER_SHOW_MUTATION,
  ADDBOOK_ACTION,
} from "../store/storeconstants";

export default {
  data() {
    return {
      // email:'',
      // password:'',
      // donationCategory:'',
      bookName: "",
      bookAuthor: "",
      bookCategory: "",
      bookDesc: "",
      bookCon: "",
      // bookImage: null,

      // errors:[],
      // error:'',
      error: [],

      accessToken: null,
      userId: null,
      PostBookIdData: null,

      // errors:{},
      // error:{},
    };
  },

  methods: {
    ...mapActions("auth", {
      // signup: SIGNUP_ACTION
      addbook: ADDBOOK_ACTION,
    }),
    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
    //image
    // onFileChange(e) {
    //     this.bookImage = e.target.files[0];
    // },

    onAddBook() {
      // this.postBookId(
      //   this.bookName,
      //   this.bookAuthor,
      //   this.bookCategory,
      //   this.bookDesc,
      //   this.bookCon
      //   // this.bookImage,
      // );
      // this.error = {};
      let validations = new AddbookValidations(
        this.bookName,
        this.bookCategory
        // this.bookImage,
      );
      this.error = validations.checkValidations();
      // if (this.error.length === 0) {
      //   return true;
      // }

      if (Object.keys(this.error).length > 0) {
                return false;
      }

      // this.addbook({
      //     // donationCategory: this.donationCategory,
      //     bookName: this.bookName,
      //     bookAuthor: this.bookAuthor,
      //     bookCategory: this.bookCategory,
      //     bookDesc: this.bookDesc,
      //     bookCon: this.bookCon,
      //     // bookImage: this.bookImage,
      //     isVisible: false

      // }).catch((error) =>{
      //     // console.log(error);
      // this.error = error;
      // });

      // const addbook = {
      //   bookId: Date.now(),
      //   bookName: this.bookName,
      //   bookAuthor: this.bookAuthor,
      //   bookCategory: this.bookCategory,
      //   bookDesc: this.bookDesc,
      //   bookCon: this.bookCon,
      //   isVisible: false,
      // };
      // this.$emit("add-book", addbook);
      // this.resetForm();

      // if (Object.keys(this.error).length === 0) {
      //   console.log("ok");
      //   this.$router.push("/");
      // }

      this.postBookId(
        this.bookName,
        this.bookAuthor,
        this.bookCategory,
        this.bookDesc,
        this.bookCon
      )

      
      if (Object.keys(this.error).length === 0) {
        console.log("ok");
        this.$router.push("/");
      }

    },
    // onCancel(){
    //   console.log("ok");
    //     this.$router.push("/");
    // }
  // },
    getAccessToken() {
      let cookieName = encodeURIComponent("access-token");
      let cookieStart = document.cookie.indexOf(cookieName);
      let cookieEnd;
      if (cookieStart > -1) {
        cookieEnd = document.cookie.indexOf(";", cookieStart);
      }
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      this.accessToken = document.cookie.substring(
        cookieStart + cookieName.length + 1,
        cookieEnd
      );
    },
    getUserId() {
      let cookieName = encodeURIComponent("user-id");
      let cookieStart = document.cookie.indexOf(cookieName);
      let cookieEnd;
      if (cookieStart > -1) {
        cookieEnd = document.cookie.indexOf(";", cookieStart);
      }
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      this.userId = document.cookie.substring(
        cookieStart + cookieName.length + 1,
        cookieEnd
      );
    },
    async postBookId(bookName, bookAuthor, bookCategory, bookDesc, bookCon) {
      try {
        const requestBody = {
          userId: Number(this.userId),
          bookName: bookName,
          bookAuthor: bookAuthor,
          bookCategory: bookCategory,
          bookDesc: bookDesc,
          bookCon: bookCon,
        };
        console.log("thissssssss: ",requestBody)
        const response = await fetch(
          `${process.env.VUE_APP_API_URL}/v1/donations`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${this.accessToken}`, // Add your token here
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          }
        );
        if (!response.ok) {
          return "error";
        }
        const data = await response.json();
        this.PostBookIdData = data;
      } catch (error) {
        return "catch";
      }
    },

    // onCancel(){
    //     console.log('CANCEL SUBMIT');
    //     this.resetForm();
    // },

    resetForm() {
      this.bookName = "";
      this.bookAuthor = "";
      this.bookCategory = "";
      this.bookDesc = "";
      this.bookCon = "";
      // this.bookImage=null;
      this.error = [];
              this.$router.push("/");

    },

    // submitForm(){

    // }
  },

  watch: {
    bookName() {
      if (this.bookName.length > 2) {
        this.error.bookName = "";
      }
    },
    bookCategory() {
      if (this.error.length === 0) {
        this.error.bookCategory = "";
      }
    },
    // bookImage(){
    //     if(this.error.length === 0) {
    //         this.error.bookImage = '';
    //     }
    // },
  },

  created() {
    this.getAccessToken();
    this.getUserId();
  },
};
</script>
