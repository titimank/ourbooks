<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div>
                    <h3>Login</h3>
                    <hr/>
                </div>
                <div class="alert alert-danger" v-if="error">{{ error }}</div>
                <form @submit.prevent="onLogin()">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model.trim="email"/>
                    </div>
                    <div class="error" v-if="error.email">{{ error.email }}</div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model.trim="password" />
                    </div>
                    <div class="error" v-if="error.password">{{ error.password }}</div>

                    <div class="my-3">
                        <button type="submit" class="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div> 
</template>

<script>
import SignupValidations from '@/services/SignupValidations';
import { mapActions } from 'vuex';
import{mapMutations} from 'vuex';
import { LOGIN_ACTION,LOADING_SPINNER_SHOW_MUTATION, } from '../store/storeconstants';

export default {
    data() {
        return {
            email: '', 
            password: '',
            errors: [],
            error:'',
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
            let validations = new SignupValidations(
                this.email, 
                this.password,
                );
            this.errors = validations.checkValidations();
            if(this.errors.length){
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

            } catch(e){
                this.error = e;
                this.showLoading(false);
            }
            this.showLoading(false);
        },
    },
};
</script>
