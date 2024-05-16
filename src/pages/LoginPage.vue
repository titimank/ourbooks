<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div>
                    <h3>Login</h3>
                    <hr />
                </div>
                <!-- <div class="alert alert-danger" v-if="error">{{ error }}</div> -->
                <form @submit.prevent="onLogin()">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model.trim="email" />
                        <div v-if="error.email">{{ error.email }}</div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model.trim="password" />
                        <div  v-if="error.password">{{ error.password }}</div>
                    </div>

                    <div class="my-3">
                        <button type="submit" class="btn btn-primary">
                            Login
                        </button>
                    </div>
                    <div>
                        {{ userLogin }}
                    </div>
                    <div>
                        {{ LoginMe }}
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import LoginValidations from '@/services/LoginValidations';
import { mapActions } from 'vuex';
import{mapMutations} from 'vuex';
import { LOGIN_ACTION,LOADING_SPINNER_SHOW_MUTATION, } from '../store/storeconstants';

export default {
    data() {
        return {
            email: '', 
            password: '',
            errors: [],
            error: '',
            userLogin: null,
            LoginMe: null
        };
    },
    methods: {
        ...mapActions('auth',{
            login: LOGIN_ACTION,
        }),
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
        async onLogin(){
            let validations = new LoginValidations(
                this.email, 
                this.password,
                );
            this.error = validations.checkValidations();
            if(this.error.length>1){
                // if('email' in this.errors || 'password' in this.errors){
                    return false;
            }
            this.error ='';
            this.showLoading(true);
            try {
                // await this.login({
                //     email: this.email, 
                //     password: this.password,
                // });
                this.PostLoginUser(this.email, this.password)
            } catch(e){
                this.error = e;
                this.showLoading(false);
            }
            this.showLoading(false);
        }, async PostLoginUser(email, password) {
            console.log(email);
            try {
                const requestBody = {
                    email: email,
                    password: password
                };
                const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/login`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });
                if (!response.ok) {
                    return "error";
                }
                const data = await response.json();
                this.userLogin = data;
                document.cookie = `${encodeURIComponent("user-id")}=${this.userLogin.userId};`
                document.cookie = `${encodeURIComponent("access-token")}=${this.userLogin.access_token};`
            } catch (error) {
                return "catch";
            }
        },
        async getLoginMe(email, password) {
            console.log(process.env.VUE_APP_API_URL);
            try {
                const requestBody = {
                    email: email,
                    password: password
                };
                const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/me`, {
                    method: "GET",
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
                this.LoginMe = data;
                document.cookie = `${encodeURIComponent("access-token")}=${this.LoginMe.access_token};`
            } catch (error) {
                return "catch";
            }
        },
    },
    // created() {
    //     this.PostLoginUser()
    // }
};
</script>
