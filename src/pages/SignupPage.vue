<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <h3>Sign Up</h3>
                <hr />
            </div>
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <form @submit.prevent="onSignup()">
                <div class="form-group">
                    <label>FirstName</label>
                    <input type="text" class="form-control" v-model.trim="firstname" />
                    <div class="error" v-if="error.firstname">{{ error.firstname }}</div>
                </div>
                <div class="form-group">
                    <label>LastName</label>
                    <input type="text" class="form-control" v-model.trim="lastname" />
                    <div class="error" v-if="error.lastname">{{ error.lastname }}</div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model.trim="email" />
                    <div class="error" v-if="error.email">{{ error.email }}</div>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model.trim="password" />
                    <div class="error" v-if="error.password">{{ error.password }}</div>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model.trim="phone" />
                    <div class="error" v-if="error.phone">{{ error.phone }}</div>
                </div>
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" v-model.trim="address" />
                    <div class="error" v-if="error.address">{{ error.address }}</div>
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
// import SignupValidations from '@/services/SignupValidations';
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
            error: '',
            userSignup: null
        }
    },
    methods: {
        ...mapActions('auth', {
            signup: SIGNUP_ACTION
        }),
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
        onSignup() {
            this.PostSignupUser(this.firstname, this.lastname, this.email, this.password, this.phone, this.address)
            // let validations = new SignupValidations(
            //     this.firstname,
            //     this.lastname,
            //     this.email, 
            //     this.password,
            //     this.phone,
            //     this.address
            //     );
            // this.errors = validations.checkValidations();
            if(this.errors.length){
            // if('email' in this.errors || 'password' in this.errors){
                return false;
            }
            this.signup({
                firstname: this.firstname, lastname: this.lastname, email: this.email, password: this.password, phone: this.phone, address: this.address
            }).catch((error) =>{
                // console.log(error);
            this.error = error;
            });
            // this.PostSignupUser(this.firstname, this.lastname, this.email, this.password, this.phone, this.address)
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
};
</script>
