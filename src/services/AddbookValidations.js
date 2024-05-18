// import Validations from './Validations';

import Validations from "./Validations";

export default class AddbookValidations {
    constructor(bookName, bookCategory, bookImage) {
        this.bookName = bookName;
        this.bookCategory = bookCategory;
        this.bookImage = bookImage;
    }

    minLength(value, length) {
        return value && value.length >= length;
    }

    checkValidations() {
        let errors = [];

        //email validations
        if (!Validations.minLength(this.bookName, 3)) {
            errors['bookName'] = 'Book name must be at least 3 characters long.';
        }
        if (!this.bookCategory || this.bookCategory === '') {
            errors['bookCategory'] = 'Please select a category.';
        }
        if (!this.bookImage) {
            errors['bookImage'] = 'Please upload an image.';
        }

        // console.log("Please fill the information!")

        return errors;
    }

    

    // static getErrorMessageFromCode(errorCode) {
    //     switch (errorCode) {
    //         case 'EMAIL_EXISTS':
    //             return 'Email already exists';
    //         case 'EMAIL_NOT_FOUND':
    //             return 'Email Not Found';
    //         case 'INVALID_PASSWORD':
    //             return 'Invalid Password';
        
    //         case 'INVALID_EMAIL':
    //             return 'Invaliddd Email';

    //         default:
    //             return 'Unexpected error occurred. Please try again';
    //     }
    // }
}
// export default AddbookValidations;

