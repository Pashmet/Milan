let input = document.querySelector('.inputPrice');

input.addEventListener('blur', changeStyleBlur);
input.addEventListener('blur', addSpanWithPrice);
input.addEventListener('focus', changeStyleFocus);

//
// let spanWithPrice = document.createElement('span');
// let closeSpan = document.createElement('span');

// function operateWithInput(changeStyleBlur,) {
//     changeStyleBlur();
//
// }

function changeStyleBlur() {
// let value = +this.value;
    console.log(this.value);
    if (this.value < 0 || isNaN(this.value)) {
        this.style.borderColor = 'rgba(203, 32, 37, 0.89)';
    } else {
        this.style.color = 'rgba(23, 203, 14, 0.89)';
        this.style.borderColor = '';
    }
}

function changeStyleFocus() {
    this.style.color = 'rgba(0, 0, 0,1)';
    this.style.outlineColor = 'rgba(23, 203, 14, 0.89)';

    if (this.parentElement.nextElementSibling) {
        this.parentElement.nextElementSibling.remove()
    }
    else if (this.parentElement.previousElementSibling){
        this.parentElement.previousElementSibling.remove()
    }

}

function addSpanWithPrice() {

    let thiss = this;

    if (this.value < 0 || isNaN(this.value)) {

        let spanWithError = document.createElement('span');
        spanWithError.innerHTML = `Please enter correct price`;
        thiss.parentElement.after(spanWithError);

    } else {

        let spanWithPrice = document.createElement('span');
        spanWithPrice.innerHTML = `Current price ${thiss.value}`;
        spanWithPrice.classList.add('spanWithPrice');
        thiss.parentElement.before(spanWithPrice);
        let closeSpan = document.createElement('span');
        closeSpan.innerHTML = 'x';
        closeSpan.classList.add('close');
        spanWithPrice.appendChild(closeSpan);

        closeSpan.addEventListener("click", removeSpan);

        function removeSpan() {
            spanWithPrice.remove();
            thiss.value = '';
            closeSpan.removeEventListener("click", removeSpan);
        }
    }
}




