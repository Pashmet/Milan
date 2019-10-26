let newUser = {};

function createNewUser() {
    let firstName = prompt("First name", "Paul");
    let lastName = prompt("Last name", "Gorodni");
    Object.defineProperty(newUser, "firstName", {
        value: firstName,
        writable: false,
        configurable: true,
    });
    Object.defineProperty(newUser, "lastName", {
        value: lastName,
        writable: false,
        configurable: true,
    });
    newUser.getLogin = function () {
        let login = (this.firstName[0] + this.lastName).toLowerCase();
        return login;
    };
    return console.log(newUser);
}

createNewUser();
console.log(newUser.getLogin());
console.log(Object.getOwnPropertyDescriptor(newUser, 'firstName').writable);

newUser.set = function setFirstName(newFirstName) {
    // Object.getOwnPropertyDescriptor(newUser, 'firstName').writable = true;
    Object.defineProperty(newUser, "firstName", {
        // value: lastName,
        writable: true,
        // configurable: true,
    });
    this.firstName = newFirstName;
    // Object.getOwnPropertyDescriptor(newUser, 'firstName').writable = false;

    Object.defineProperty(newUser, "firstName", {
        // value: lastName,
        writable: false,
        // configurable: true,

    });
};

newUser.set2 = function setLastName(newLastName) {
    // Object.getOwnPropertyDescriptor(newUser, 'firstName').writable = true;
    Object.defineProperty(newUser, "lastName", {
        // value: lastName,
        writable: true,
        // configurable: true,
    });
    this.lastName = newLastName;
    // Object.getOwnPropertyDescriptor(newUser, 'firstName').writable = false;

    Object.defineProperty(newUser, "lastName", {
        // value: lastName,
        writable: false,
        // configurable: true,

    });
};

// console.log(newUser);
newUser.firstName = "Tony";

console.log(newUser.firstName, " ", newUser.lastName);
newUser.set("Vasyl");
newUser.set2("Uskiv");

console.log(newUser.firstName, " ", newUser.lastName);
newUser.firstName = "Gun";
newUser.lastName = "Gunyy";
console.log(newUser.firstName, " ", newUser.lastName);

newUser.set("vitka");
newUser.set2("Markiv");
console.log(newUser.firstName, " ", newUser.lastName);


// Object.getOwnPropertyDescriptor(newUser, 'firstName').writable;
// Object.getOwnPropertyDescriptor(newUser, 'firstName').writable=true;
console.log(Object.getOwnPropertyDescriptor(newUser, 'firstName').writable);
// console.log(Object.getOwnPropertyDescriptor(newUser, 'lastName'));

// let user2={};
//
// Object.defineProperty(user2, "name", {
//     value: "John",
//     writable: false,
//     enumerable: false,
//     configurable: true
// });
//
// console.log(Object.getOwnPropertyDescriptor(user2, name));
//
// user2.name = "Vasa";
// console.log(user2.name);
