import Axios from 'axios';
import SignupValidations from '../../../services/SignupValidations';
import AddbookValidations from '../../../services/SignupValidations';

import {
//     AUTH_ACTION,
    LOGIN_ACTION,
//     AUTO_LOGIN_ACTION,
//     LOGOUT_ACTION,
    SET_USER_TOKEN_DATA_MUTATION,
    SIGNUP_ACTION,
    ADDBOOK_ACTION,
//     AUTO_LOGOUT_ACTION,
//     SET_AUTO_LOGOUT_MUTATION,
} from '../../storeconstants';


// let timer = '';
// export default {
//     [LOGOUT_ACTION](context) {
//         context.commit(SET_USER_TOKEN_DATA_MUTATION, {
//             email: null,
//             token: null,
//             expiresIn: null,
//             refreshToken: null,
//             userId: null,
//         });
//         localStorage.removeItem('userData');
//         if (timer) {
//             clearTimeout(timer);
//         }
//     },

//     [AUTO_LOGOUT_ACTION](context) {
//         context.dispatch(LOGOUT_ACTION);
//         context.commit(SET_AUTO_LOGOUT_MUTATION);
//     },

//     async [LOGIN_ACTION](context, payload) {
//         return context.dispatch(AUTH_ACTION, {
//             ...payload,
//             url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9HEOZrRHZP026VQObeDz2PVD_GLpMV50`,
//         });
//     },

//     async [SIGNUP_ACTION](context, payload) {
//         return context.dispatch(AUTH_ACTION, {
//             ...payload,
//             url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4VUCB3a2L3eHQ8YOdDtRhc6TLeMJUoNc
//             `,
//         });
//     },

//     [AUTO_LOGIN_ACTION](context) {
//         let userDataString = localStorage.getItem('userData');

//         if (userDataString) {
//             let userData = JSON.parse(userDataString);
//             let expirationTime = userData.expiresIn - new Date().getTime();

//             if (expirationTime < 10000) {
//                 context.dispatch(AUTO_LOGOUT_ACTION);
//             } else {
//                 timer = setTimeout(() => {
//                     context.dispatch(AUTO_LOGOUT_ACTION);
//                 }, expirationTime);
//             }

//             context.commit(SET_USER_TOKEN_DATA_MUTATION, userData);
//         }
//     },

//     async [AUTH_ACTION](context, payload) {
//         let postData = {
//             email: payload.email,
//             password: payload.password,
//             returnSecureToken: true,
//         };
//         let response = '';
//         try {
//             response = await Axios.post(payload.url, postData);
//         } catch (err) {
//             // context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {
//             //     root: true,
//             // });
//             let errorMessage = SignupValidations.getErrorMessageFromCode(
//                 err.response.data.error.errors[0].message,
//             );
//             throw errorMessage;
//         }

//         if (response.status === 200) {
//             let expirationTime = +response.data.expiresIn * 1000;

//             timer = setTimeout(() => {
//                 context.dispatch(AUTO_LOGOUT_ACTION);
//             }, expirationTime);

//             let tokenData = {
//                 email: response.data.email,
//                 token: response.data.idToken,
//                 expiresIn: expirationTime,
//                 refreshToken: response.data.refreshToken,
//                 userId: response.data.localId,
//             };
//             localStorage.setItem('userData', JSON.stringify(tokenData));
//             context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
//         }
//     },
// };



export default{
    async[LOGIN_ACTION](context, payload) {
                // return context.dispatch(AUTH_ACTION, {
                //     ...payload,
                //     url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9HEOZrRHZP026VQObeDz2PVD_GLpMV50`,
                // });

        let postData = {
                    email:payload.email,
                    password: payload.password,
                    returnSecureToken: true,
        };
        let response ='';
        try {
            // eslint-disable-next-line no-unused-vars
            response = await Axios.post(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4VUCB3a2L3eHQ8YOdDtRhc6TLeMJUoNc',
           postData,
       );
       } catch(err){
        //    let errorMessage = SignupValidations.getErrorMessageFromCode(
        //        err.response.data.error.errors[0].message,
        //    );
           // console.log(errorMessage);
        //    throw errorMessage;

       }
    },

    async[ADDBOOK_ACTION](context, payload) {
        // return context.dispatch(AUTH_ACTION, {
        //     ...payload,
        //     url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9HEOZrRHZP026VQObeDz2PVD_GLpMV50`,
        // });

        let postData = {
            bookName:payload.bookName,
            bookAuthor: payload.bookAuthor,
            bookCategory: this.bookCategory,
            bookDesc: this.bookDesc,
            bookCon: this.bookCon,
            returnSecureToken: true,
        };
        let response ='';
        try {
    // eslint-disable-next-line no-unused-vars
             response = await Axios.post(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4VUCB3a2L3eHQ8YOdDtRhc6TLeMJUoNc',
        postData,
        );
} catch(err){
   let errorMessage = AddbookValidations.getErrorMessageFromCode(
       err.response.data.error.errors[0].message,
   );
   // console.log(errorMessage);
   throw errorMessage;

}
},


    async[SIGNUP_ACTION](context,payload){
        let postData = {
            email:payload.email,
            password: payload.password,
            returnSecureToken: true,
        };
        let response='';
        try {
             response = await Axios.post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4VUCB3a2L3eHQ8YOdDtRhc6TLeMJUoNc',
            postData,
        );
        } catch(err){
            let errorMessage = SignupValidations.getErrorMessageFromCode(
                err.response.data.error.errors[0].message,
            );
            // console.log(errorMessage);
            throw errorMessage;

        }
        // console.log(response);
        
        if (response.status === 200) {
//             let expirationTime = +response.data.expiresIn * 1000;

//             timer = setTimeout(() => {
//                 context.dispatch(AUTO_LOGOUT_ACTION);
//             }, expirationTime);

            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                email: response.data.email,
                token: response.data.idToken,
                expiresIn: response.data.expirationIn,
                refreshToken: response.data.refreshToken,
                userId: response.data.localId,

            });

//             let tokenData = {
                // email: response.data.email,
                // token: response.data.idToken,
                // expiresIn: expirationTime,
                // refreshToken: response.data.refreshToken,
                // userId: response.data.localId,
//             };
//             localStorage.setItem('userData', JSON.stringify(tokenData));
//             context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
        }
    },
};