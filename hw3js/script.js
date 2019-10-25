let num1 = 0;
let num2 = 0;
let operator = "";

function calc(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + +num2;
           break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;

    }
}

do {
    num1 = +prompt("Enter number 1", num1);
    operator = prompt("Enter operator", operator);
    num2 = +prompt("Enter number 2", num2);
    // console.log(isNaN(num1));
    // console.log(isNaN(num2));
    // console.log(operator !== "+"&& operator !== "-" && operator !== "/" && operator !== "*");
    // console.log(operator !== "/");
    // console.log(operator !== "*");
    // console.log(operator !== "-");
}

while (isNaN(num1) || isNaN(num2) ||
(operator !== "+"&& operator !== "-" && operator !== "/" && operator !== "*"));


console.log(calc(num1, num2, operator));