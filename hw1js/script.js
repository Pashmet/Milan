let name="";
let age="";
// name=prompt("Enter your name");
// age= +prompt("Enter your age");
let allowed;
let notAllowed = "You are not allowed to visit this website";
do{
    name=prompt('Enter your name', name);
    age= +prompt("Enter your age",age)
}
while (name==="" || isNaN(age)===true||age<=0);
allowed ="Welcome "+name;
if(age <18){
    alert(notAllowed)
}else if(age<=22 ){
    let wantToContinue = confirm("Are you sure you want to continue?");
    if(wantToContinue===true){
alert(allowed)
    }else
        alert(notAllowed)
}
else alert(allowed);