export default class Validations {
    static checkEmail(email) {
        if (
            // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            // /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(

            /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(

                email,
            )
        ) {
            return true;
        }
        return false;
    }

    static minLength(name, minLength) {
        if (name.length < minLength) {
            return false;
        }
        return true;
    }

    
    // static minLength(password, minLength) {
    //     if (password.length < minLength) {
    //         return false;
    //     }
    //     return true;
    // }

    // static bookLength(bookName, minLength) {
    //     if (bookName.length < minLength) {
    //         return false;
    //     }
    //     return true;
    // }


 
    // bookLength(bookName, minLength) {
    //     if (bookName.length < minLength) {
    //         return false;
    //     }
    //     return true;
    // }
}
