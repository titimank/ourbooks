import Validations from './Validations';

export default class SignupValidations {
    constructor(firstname,lastname,email, password,phone,address) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.phone =phone;
        this.address= address;
    }

    checkValidations() {
        let errors = [];

        if (!Validations.minLength(this.firstname, 1 )) {
            errors['firstname'] = 'Plase enter name';
        }

        if (!Validations.minLength(this.lastname, 1 )) {
            errors['lastname'] = 'Plase enter name';
        }

        //email validations
        if (!Validations.checkEmail(this.email)) {
            errors['email'] = 'Invalid Email';
        }

        //password Validations
        if (!Validations.minLength(this.password, 6)) {
            errors['password'] = 'password should be of 6 characters';
        }

        // if (!this.phone.(this.phone, 10  )) {
        //     errors['bookName'] = 'Please enter a valid phone number';
        // }

        if (!/^\d{10}$/.test(this.phone)) {
            errors['phone'] = 'Please enter a valid phone number';
        }


        if (!Validations.minLength(this.address, 1 )) {
            errors['address'] = 'Plase enter address';
        }

        return errors;
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
