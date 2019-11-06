let arr = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
let arr2 = ['1', '2', '3', 'sea', 'user', 23];

function createList(array){
    let list = document.createElement('ul');
    document.body.prepend(list);
    array.map((elem, i)=>{
        let item= document.createElement('li');
        item.innerHTML = `елемент ${i+1} - '${elem}'`;
        list.appendChild(item);
    })
}



// let item= document.createElement('li');
// list.append(item);
// list.prepend(item);
// list.append(item);147грн
