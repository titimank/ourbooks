<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
        <h3>Sign Up</h3>
        <hr/>
    </div>
    <!-- <div class="alert alert-danger" v-if="error">{{ error }}</div> -->
        <form @submit.prevent="onSignup()">
            <div class="form-group">
                <label>Email</label>
                <input type="text" placeholder="Enter email" v-model.trim='email' />
                <div class="form-text text-muted" v-if="error.email">{{ error.email }}</div>
                <!-- <div class="alert alert-danger" v-if="error">{{ error.email }}</div> -->

            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter Password" v-model.trim='password' />
                <div class="form-text text-muted" v-if="error.password">{{ error.password }}</div>
                <!-- <div class="alert alert-danger" v-if="error">{{ error.password }}</div> -->

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
        return{
            email:'',
            password:'',
            errors:[],
            error:'',

            // errors:{},

        }
    },

    methods: {

        ...mapActions('auth', {
            signup: SIGNUP_ACTION

        }),

        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),

        onSignup(){
            let validations = new SignupValidations(
                this.email, 
                this.password,
                );
            this.error = validations.checkValidations();
            if(this.errors.length < 1){
            // if('email' in this.errors || 'password' in this.errors){
                return false;
            }
            this.signup({
                email: this.email, 
                password: this.password
            }).catch((error) =>{
                // console.log(error);
            this.error = error;
            });
        },
    },
};
</script>
