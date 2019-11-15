let form = document.querySelector('.password-form');
let pwd = form.querySelector('.pwd');
let confirmPwd = form.querySelector('.confirmPwd');
form.addEventListener('submit', onSubmit);


function onSubmit(ev) {
    ev.preventDefault();
    let btnSubmit = ev.target;
    let form = ev.target.parentElement;
    let pwd = form.querySelector('.pwd');
    let confirmPwd = form.querySelector('.confirmPwd');

    if (form.querySelector('.notConcurrencePwd')) {
        console.log(form.querySelector('.notConcurrencePwd'));
        let msg = form.querySelector('.notConcurrencePwd');
        msg.remove();
    }
// setTimeout(()=>{if (pwd.value === confirmPwd.value) {
//         alert('You are welcome')
//     } else {
//         createMessageOfNotConcurrencePwd(confirmPwd.parentElement)
//     }});

    if (pwd.value === confirmPwd.value) {
        alert('You are welcome')
    } else {
        createMessageOfNotConcurrencePwd(confirmPwd.parentElement)
    }
}

function createMessageOfNotConcurrencePwd(target) {
    let msg = document.createElement('span');
    msg.innerText = 'Нужно ввести одинаковые значения';
    msg.style.color = 'red';
    msg.classList = 'notConcurrencePwd';
    target.after(msg);
}

form.addEventListener('mousedown', showPwd);
form.addEventListener('mouseup', hidePwd);

function showPwd(ev) {
    if (ev.target.closest('label') && ev.target.previousElementSibling.tagName === 'INPUT') {
        let input = ev.target.previousElementSibling;
        input.setAttribute('type', 'text');
        createIcon(input);
    }
}

function createIcon(target) {
    let icon = target.nextElementSibling;
    icon.classList.add('fa-eye-slash');
}

function deleteIcon(target) {
    let icon = target.nextElementSibling;
    icon.classList.remove('fa-eye-slash');
}

function hidePwd(ev) {
    if (ev.target.closest('label') && ev.target.previousElementSibling.tagName === 'INPUT') {
        let input = ev.target.previousElementSibling;
        input.setAttribute('type', 'password');
        deleteIcon(input);
    }
}

