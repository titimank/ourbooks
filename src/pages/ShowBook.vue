<template>
<div>
    <li>
        <!-- {{bookImage }} -->
    <h1>{{ bookName }}</h1>
    <button @click="showDetails()">more details</button>
    <transition name="fade">
        <div v-show="isVisible">
            <h3>{{ bookAuthor }}</h3>
            <h3>Category: {{ bookCategory }}</h3>
            <h3>{{ bookDesc }}</h3>
            <h3> {{ bookCon }}</h3>
        </div>
    </transition>
    </li>
    <!-- <h1>{{ bookAuthor }}</h1>
    <h1>{{ bookCategory }}</h1>
    <h1>{{ bookTitle }}</h1>
    <h1>{{ bookDesc }}</h1> -->

</div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import{mapMutations} from 'vuex';
import{LOADING_SPINNER_SHOW_MUTATION} from '../store/storeconstants';

export default{
    name:"ShowBook",
    // data(){
    //     return {
    //         // donationCategory:'',
    //         bookName: '22',
    //         bookAuthor: '',
    //         bookCategory:'',
    //         bookTitle: '',
    //         bookDesc: '',
    //     }
    // },

    props:{
        // "bookName",
        // "bookAuthor",
        // "bookCategory",
        // "bookTitle",
        // "bookDesc",

        bookId:{
            type:Number,
            requireed:true

        },

        bookName:{
            type: String,
            requireed:true
        },
        bookAuthor:{
            type: String,

        },
        bookCategory:{
            type: String,
            // requireed:true
        },        
        bookDesc:{
            type: String,

        },
        bookCon:{
            type: String,

        },
        isVisible:{
            type: Boolean
        },


    },

    
    methods: {
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
        showDetails(){
            console.log("Emitting show event with bookId:", this.bookId);
            this.$emit("show", this.bookId);
            // console.log(bookId);
            //this.$emit("show");
        }
    }
};
</script>
<style scoped>
li{
    margin:1rem 0;
    font-size: 1.25rem;
    font-weight: bold;
    background: #a2c6f4 ;
    padding: 0.5rem;
    color:rgb(0, 51, 127);
    border-radius: 25px;
}
button{
    font:inherit;
    cursor: pointer;
    border: 1px solid #ffc0e9;
    background: #c55ca0;
    color: #a2c6f4;
    padding: 0.5rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

    