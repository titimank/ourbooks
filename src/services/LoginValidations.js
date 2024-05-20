import Validations from './Validations';

export default class LoginValidations {
    constructor(email, password) {

        this.email = email;
        this.password = password;
    }

    checkValidations() {
        let error = [];

        //email validations
        if (!Validations.checkEmail(this.email)) {
            error['email'] = 'Invalid Email';
        }

        //password Validations
        if (!Validations.minLength(this.password, 6)) {
            error['password'] = 'password should be of 6 characters';
        }

        // if (!this.phone.(this.phone, 10  )) {
        //     errors['bookName'] = 'Please enter a valid phone number';
        // }

        return error;
    }

    static getErrorMessageFromCode(errorCode) {
        switch (errorCode) {
            case 'EMAIL_EXISTS':
                return 'Email already exists';
            case 'EMAIL_NOT_FOUND':
                return 'Email Not Found';
            case 'INVALID_PASSWORD':
                return 'Invalid Password';
        
            // case 'INVALID_EMAIL':
            //     return 'Invaliddd Email';

            default:
                return 'Unexpected error occurred. Please try again';
        }
    }
}
