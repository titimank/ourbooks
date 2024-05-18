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

        if (!Validations.minLength(this.firstname, 3 )) {
            errors['firstname'] = 'Plase enter Firstname';
        }

        if (!Validations.minLength(this.lastname, 3 )) {
            errors['lastname'] = 'Plase enter Lastname';
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
            errors['phone'] = 'Please enter phone number';
        }


        if (!Validations.minLength(this.address, 10 )) {
            errors['address'] = 'Plase enter address';
        }

        // console.log("Please fill the information!")

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
