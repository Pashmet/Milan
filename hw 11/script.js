let btnWrapper = document.querySelector('.btn-wrapper');
let btns = btnWrapper.children;
document.addEventListener('keydown', onKeydown);
function onKeydown(evt) {
    for (let i = 0; i < btns.length; i++) {
        backgroundDefault(btns[i]);
                if (evt.code === `Key${btns[i].innerText}`
            || evt.code === btns[i].innerText
            || evt.key === btns[i].innerText) {
            changeBackground(btns[i]);
        }
    }
}
function changeBackground(target) {
    target.style.backgroundColor = '#445E93'
}
function backgroundDefault(target) {
    target.style.backgroundColor = '#33333a'
}