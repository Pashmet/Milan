function createNewUser() {
    let firstName = prompt("First name", "Paul");
    let lastName = prompt("Last name", "Gorodni");
    let birthday = prompt('Birthday', '25.03.1994');

    let newUser = {
        birthday: birthday,
        getPassword() {
            return newUser.firstName[0].toUpperCase()
                + newUser.lastName.toLowerCase()
                + newUser.birthday.slice(-4);
        },
        getLogin() {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        setLastName(newLastName) {
            Object.defineProperty(newUser, "lastName", {
                writable: true,
            });
            this.lastName = newLastName;
            Object.defineProperty(newUser, "lastName", {
                writable: false,
            });
        },
        setFirstName(newFirstName) {
            Object.defineProperty(newUser, "firstName", {
                writable: true,
            });
            this.firstName = newFirstName;
            Object.defineProperty(newUser, "firstName", {
                writable: false,
            });
        },
        getAge() {
            let birthdayDay = +new Date(newUser.birthday.split(".").reverse().join("."));
            let age = Math.trunc((Date.now() - birthdayDay) / 31557600000);
            return age;
        },
    };

    Object.defineProperty(newUser, "lastName", {
        value: lastName,
        writable: false,
        configurable: true,
    });
    Object.defineProperty(newUser, "firstName", {
        value: firstName,
        writable: false,
        configurable: true,
    });
    return newUser;
}

let newUser = createNewUser();
console.log(newUser.getAge());
console.log(newUser.getPassword());

    // -------------------------------
    // newUser.birthday= birthday;
    // ------------------------------
    // newUser.getAge = () => {
    //     // let date = new Date();
    //     // let todayYear = date.getFullYear();
    //     // let birthdayDay = +birthday.slice(-4);
    //     let birthdayDay = +new Date(newUser.birthday.split(".").reverse().join("."));
    //     let Age = Math.trunc((Date.now() - birthdayDay)/31557600000);
    //     return Age;
    // };
// --------------------------------
//     newUser.getPassword = ()=>{
//         let password = newUser.firstName[0].toUpperCase()+newUser.lastName.toLowerCase()+newUser.birthday.slice(-4);
// return password;
//     };

    // ---------------------------------------

    // ------------------------------
    // newUser.getLogin = function () {
    //     let login = (this.firstName[0] + this.lastName).toLowerCase();
    //     return login;
    // };
    // ---------------------------------------------
    // newUser.set = function setFirstName(newFirstName) {
    //     // Object.getOwnPropertyDescriptor(newUser, 'firstName').writable = true;
    //     Object.defineProperty(newUser, "firstName", {
    //         // value: lastName,
    //         writable: true,
    //         // configurable: true,
    //     });
    //     this.firstName = newFirstName;
    //     // Object.getOwnPropertyDescriptor(newUser, 'firstName').writable = false;
    //     Object.defineProperty(newUser, "firstName", {
    //         // value: lastName,
    //         writable: false,
    //         // configurable: true,
    //     });
    // };
    // -------------------------------
    // newUser.set2 = function setLastName(newLastName) {
    //     // Object.getOwnPropertyDescriptor(newUser, 'firstName').writable = true;
    //     Object.defineProperty(newUser, "lastName", {
    //         // value: lastName,
    //         writable: true,
    //         // configurable: true,
    //     });
    //     this.lastName = newLastName;
    //     // Object.getOwnPropertyDescriptor(newUser, 'firstName').writable = false;
    //     Object.defineProperty(newUser, "lastName", {
    //         // value: lastName,
    //         writable: false,
    //         // configurable: true,
    //     });
    // };
// ------------------------------------------------


// --------------------------------------

