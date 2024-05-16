<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
        <h3>ADD BOOK</h3>
    </div>    
                    <form @submit.prevent="onAddBook()">

        <div class="form-group">
                <label>Categoty</label>
                <select v-model='donationCategory'  >
                    <option selected value="">Donates</option>
                    <option>Accept donations</option>
                </select>
                <!-- <div class="error" v-if="error.bookCategory">{{ error.bookCategory }}</div> -->
                </div>
        <hr/>

    <!-- <div class="alert alert-danger" v-if="error">{{ error }}</div> -->
        <!-- <form @submit.prevent="onSignup()"> -->
            <!-- <form @submit.prevent="onAddBook()"> -->
            <div class="form-group">
                <label>Book Name</label>
                <input type="text" v-model.trim='bookName' />
                <div class="error" v-if="error.bookName">{{ error.bookName }}</div>
            </div>
            <div class="form-group">
                <label>Author</label>
                <input type="text"  v-model.trim='bookAuthor' />
                <!-- <div class="error" v-if="error.bookAuthor">{{ error.bookAuthor }}</div> -->
            </div>
            <div class="form-group">
                <label>Categoty</label>
                <select v-model='bookCategory'  >
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
                <div class="error" v-if="error.bookCategory">{{ error.bookCategory }}</div>
                </div>


                <!-- <div class="error" v-if="error"bookAuthor">{{ error"bookAuthor }}</div> -->
            <!-- </div> -->
            <div class="form-group">
                <label>Title</label>
                <input type="text"  v-model.trim='bookTitle' />
                <!-- <div class="error" v-if="error.bookTitle">{{ error.bookTitle }}</div> -->
            </div>
            <div class="form-group">
                <label>Description</label>
                <input type="text" v-model.trim='bookDesc' />
                <!-- <div class="error" v-if="error.bookDesc">{{ error.bookDesc }}</div> -->
            </div>
            <div class="my-3">
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
                
                <button type="cancle" class="btn btn-primary">
                    Cancle
                </button>
            </div>

<!-- 
            methods: {
    onCancel(){
        console.log('CANCEL SUBMIT');
        this.show = false;
        this.$router.push({ name: 'users' });
    }
} -->



        </form>
    </div>
        </div>
    
</template>

<script>
import AddbookValidations from '@/services/AddbookValidations';
// import Validations from '@/services/Validations';
import{mapActions} from 'vuex';
import{mapMutations} from 'vuex';
import{LOADING_SPINNER_SHOW_MUTATION, ADDBOOK_ACTION} from '../store/storeconstants';

export default {
    data(){
        return{
            // email:'',
            // password:'',
            donationCategory:'',
            bookName:'',
            bookAuthor:'',
            bookCategory:'',
            bookTitle:'',
            bookDesc:'',

            errors:[],
            error:'',
        }
    },

    methods: {

        ...mapActions('auth', {
            // signup: SIGNUP_ACTION
            addbook: ADDBOOK_ACTION


        }),

        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
        onAddBook(){
            let validations = new AddbookValidations(
                this.bookName,
                this.bookCategory, 
                );
            // this.errors = validations.checkValidations();
            // if(this.errors.length){
            // // if('email' in this.errors || 'password' in this.errors){
            //     return false;
            // }
            this.error = validations.checkValidations();
            if(this.error.length < 3 ){
            // if('email' in this.errors || 'password' in this.errors){
                console.log('Add more Name');
                return false;
            }
            this.addbook({
                donationCategory: this.donationCategory,
                bookName: this.bookName,
                bookAuthor: this.bookAuthor,
                bookCategory: this.bookCategory,
                bookTitle: this.bookTitle,
                bookDesc: this.bookDesc
            }).catch((error) =>{
                // console.log(error);
            this.error = error;
            });
        },

        onCancel(){
            console.log('CANCEL SUBMIT');
    // กระทำตามที่คุณต้องการเมื่อยกเลิกการส่งข้อมูล
    // สามารถเรียกใช้งาน route หรือเปิด modal เพื่อแจ้งให้ผู้ใช้ทราบ
        },

    },
};
</script>
