<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>

    <!-- <div class="alert alert-danger" v-if="error">{{ error }}</div> -->
        <!-- <form @submit.prevent="onSignup()">
            <div class="form-group">
                <label>Email</label>
                <input type="text" placeholder="Enter email" v-model.trim='email' />
                <div class="form-text text-muted" v-if="error.email">{{ error.email }}</div> -->

            <!-- </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter Password" v-model.trim='password' />
                <div class="form-text text-muted" v-if="error.password">{{ error.password }}</div> -->

                <h3>Sign Up</h3>
                <hr />
            </div>
            <!-- <div class="alert alert-danger" v-if="error">{{ error }}</div> -->
            <form @submit.prevent="onSignup()">
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text"  v-model.trim="firstname" />
                    <div class="form-text text-muted" v-if="error.firstname">{{ error.firstname }}</div>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text"  v-model.trim="lastname" />
                    <div class="form-text text-muted" v-if="error.lastname">{{ error.lastname }}</div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text"  v-model.trim="email" />
                    <div class="form-text text-muted" v-if="error.email">{{ error.email }}</div>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password"  v-model.trim="password" />
                    <div class="form-text text-muted" v-if="error.password">{{ error.password }}</div>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text"  v-model.trim="phone" @input="phone = $event.target.value.replace(/[^0-9]/g, '')" maxlength="10"/>
                    <div class="form-text text-muted" v-if="error.phone">{{ error.phone }}</div>
                </div>
                <div class="form-group">
                    <label>Address</label>
                    <input type="text"  v-model.trim="address" />
                    <div class="form-text text-muted" v-if="error.address">{{ error.address }}</div>
                </div>

                <div class="my-3">
                    <button type="submit" class="btn btn-primary">
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>

// import Validations from '@/services/Validations';

import SignupValidations from '@/services/SignupValidations';
import{mapActions} from 'vuex';
import{mapMutations} from 'vuex';
import{LOADING_SPINNER_SHOW_MUTATION, SIGNUP_ACTION} from '../store/storeconstants';

export default {
    data(){
        return {
            firstname: '',
            lastname: '',
            email:'',
            password: '',
            phone: '',
            address: '',
            errors:[],
            error: {},

            userSignup: null
        };
    },

    methods: {
        ...mapActions('auth', {
            signup: SIGNUP_ACTION
        }),
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
        
        onSignup() {
            this.PostSignupUser(
                this.firstname, 
                this.lastname, 
                this.email, 
                this.password, 
                this.phone, 
                this.address)

            let validations = new SignupValidations(
                this.firstname,
                this.lastname,
                this.email, 
                this.password,
                this.phone,
                this.address,
                );
            this.error = validations.checkValidations();
            // if(this.errors.length < 1){
            if(this.error.length === 0 ){
                return true;
        }
            this.signup({
                firstname: this.firstname, 
                lastname: this.lastname, 
                email: this.email, 
                password:this.password, 
                phone: this.phone, 
                address: this.address,
            }).catch((error) =>{
                // console.log(error);
            this.error = error;
            });


            //no error go to homepage-unvaliable
            if (Object.keys(this.error).length === 0) {
                console.log("ok")
                this.$router.push('/');
            }

            // this.PostSignupUser(this.firstname, this.lastname, this.email, this.password, this.phone, this.address)
    // }},
        },
        async PostSignupUser(firstname, lastname, email, password, phone, address) {
            console.log(process.env.VUE_APP_API_URL);
            try {
                const requestBody = {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password,
                    phone: phone,
                    address: address
                };
                console.log("thissssssss: ",requestBody)

                const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/register`, {
                    method: "POST",
                    headers: {
                        'Authorization': `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`,  // Add your token here
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });
                if (!response.ok) {
                    return "error";
                }
                const data = await response.json();
                console.log(data);
                this.userSignup = data;
                document.cookie = `${encodeURIComponent("access-token")}=${this.userSignup.access_token};`
            } catch (error) {
                return "catch";
            }
        },
    },

    watch: {
        firstname() {
            if (this.firstname.length > 2) {
                this.error.firstname = '';
            }
        },
        lastname(){
            if(this.lastname.length > 2) {
                this.error.lastname = '';
            }
        },
        email() {
            // let validations = new SignupValidations(
            //     this.email,
            //     email // ใช้ค่า email ใหม่ที่เปลี่ยนแปลง
            // );
            // let isValidEmail = validations.checkValidations().length === 0;

            // // ใช้ === เพื่อเปรียบเทียบค่ากับ true
            // if (isValidEmail) {
            //     this.error.email = '';
            // }
            if(this.email.length > 3) {
                this.error.email = '';
            }
        },                      
        password(){
            if(this.password.length > 5) {
                this.error.password = '';
            }
        },        
        phone(){
            if(this.phone.length !== 10) {
                this.error.phone= 'Phone number must be 10 digits long';
            }
            if(this.phone.length === 10) {
                this.error.phone= '';
            }
        },        
        address(){
            if(this.phone.length < 10) {
                this.error.phone= 'Please enter address';
            }
            if(this.address.length > 10) {
                this.error.address = '';
            }

        },
    },



};

</script>
