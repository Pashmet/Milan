function createNewUser() {
    let firstName = prompt("First name", "Paul");
    let lastName = prompt("Last name", "Gorodni");

    let newUser = {
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
console.log(newUser.getLogin());
