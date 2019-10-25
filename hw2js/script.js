// let num = 0;
// let result = "";
// // let noNumb = "Sorry, no numbers.";
//
// do {
//     num = +prompt("Enter integer, positive number");
// }
// while (isNaN(num) === true || num < 0 || num % 1 !== 0);
//
// if (num < 5) {
//     result = "Sorry, no numbers.";
// } else
//     result = "Multiples five: ";
// for (let i = 5; i <= num; i+=5) {
//     // let resDivision = i % 5;
//     // if (!resDivision) {
//         result += i+", ";
//         console.log(result)
//     // }/
// }
//
// alert(result);

// закоментуйте все що вище і розкоментуйте все, що нижче
let m;
let n;

m = +prompt("Enter integer, positive number (start of range)");
n = +prompt("Enter integer, positive number (end of range)");

while (isNaN(n)|| n < 0 || n % 1 || isNaN(m) || m < 0 || m % 1 || m > n) {
    alert("Error");
    m = +prompt("Enter integer, positive number (start of range)");
    n = +prompt("Enter integer, positive number (end of range)");
}

let result = "Prime number(s): ";
let count = 0;
for (let i = m; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
        let resDivision = i % k;
        // let count = 0;
        if (!resDivision) {
            ++count;
        }
    }

    if (count === 2) {
        result += i+", ";
    }
    count=0;
}
alert(result);