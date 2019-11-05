let massive = ['hello', 'world', 23, '23', null, true, false,];


// function filterBy(arr, typ) {
//     return arr.filter(function (element) {
//         return typeof (element) !== typ;
//     });
//
// }
function filterBy(arr, typ) {
    return arr.filter(element => typeof (element) !== typ)
}

console.log(filterBy(massive, 'number'));
console.log(filterBy(massive, 'object'));
console.log(filterBy(massive, 'string'));
console.log(filterBy(massive, 'boolean'));
