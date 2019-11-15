document.addEventListener('DOMContentLoaded', themeOnLoad);
let btnChangeTheme = document.createElement('button');
btnChangeTheme.innerText = 'Change theme';
btnChangeTheme.classList.add('btnTheme');

let mainTheme = document.querySelector('.mainTheme');

let main = document.querySelector('.main');

main.after(btnChangeTheme);

btnChangeTheme.addEventListener("click", changeTheme);

function themeOnLoad() {
    if (localStorage.getItem('data-black')) {
        if (localStorage.getItem('data-black') === 'true') {
            blackTheme()
        } else {
            whiteTheme()
        }
    }
}


function changeTheme() {
    if (mainTheme.getAttribute('data-black') === "true") {
        whiteTheme();
    } else {
        blackTheme();
    }
}

function whiteTheme() {
    btnChangeTheme.className = 'btnThemeWhite';
    mainTheme.className = 'mainThemeWhite';
    mainTheme.setAttribute('data-black', 'false');
    localStorage.setItem('data-black', 'false');
}

function blackTheme() {
    btnChangeTheme.className = 'btnTheme';
    mainTheme.className = 'mainTheme';
    mainTheme.setAttribute('data-black', 'true');
    localStorage.setItem('data-black', 'true');
}

