let input = document.querySelector('.inputPrice');

input.addEventListener('blur', addSpanWithPrice);
input.addEventListener('focus', changeStyleFocus);

function changeStyleFocus() {
    this.style.color = 'rgba(0, 0, 0,1)';
    this.style.outlineColor = 'rgba(23, 203, 14, 0.89)';
    if (this.parentElement.nextElementSibling) {
        this.parentElement.nextElementSibling.remove()
    } else if (this.parentElement.previousElementSibling) {
        this.parentElement.previousElementSibling.remove()
    }

}

function addSpanWithPrice(ev) {
    // let thiss = this;
    // console.log('1', this);

    changeStyleBlur(this);
    // console.log('xz', ev.target);
    if (this.value < 0 || isNaN(this.value)) {
        let spanWithError = document.createElement('span');
        spanWithError.innerHTML = `Please enter correct price`;
        this.parentElement.after(spanWithError);
    } else {
        let spanWithPrice = document.createElement('span');
        spanWithPrice.innerHTML = `Current price ${this.value}`;
        spanWithPrice.classList.add('spanWithPrice');
        this.parentElement.before(spanWithPrice);
        let closeSpan = document.createElement('span');
        closeSpan.innerHTML = 'x';
        closeSpan.classList.add('close');
        spanWithPrice.appendChild(closeSpan);

        closeSpan.addEventListener("click", removeSpan);

        function removeSpan() {
            spanWithPrice.remove();
            ev.target.value = '';
            // ev.bind(this).value = '';
            // console.log('1', this);
            // console.log('2', ev.bind(this));

            closeSpan.removeEventListener("click", removeSpan);
        }
    }
}



function changeStyleBlur(target) {
    if (target.value < 0 || isNaN(target.value)) {
        target.style.borderColor = 'rgba(203, 32, 37, 0.89)';
    } else {
        target.style.color = 'rgba(23, 203, 14, 0.89)';
        target.style.borderColor = '';
    }
}
