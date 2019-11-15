let gallery = document.querySelector('.images-wrapper');
let listImg = document.querySelectorAll('.image-to-show');

let indexImgToShow = 0;
let intervalToShow = setInterval(nextImg, 10000);

let contbtn = document.createElement('button');
contbtn.innerText = 'Continue';
contbtn.style.margin = '10px';
gallery.after(contbtn);

let stopBtn = document.createElement('button');
stopBtn.innerText = 'Stop';
stopBtn.style.margin = '10px';
gallery.after(stopBtn);

stopBtn.addEventListener('click', stopShowing);
contbtn.addEventListener('click', continueShowing);

function nextImg() {
    listImg[indexImgToShow].className = 'image-to-show';
    indexImgToShow = (indexImgToShow + 1) % listImg.length;
    listImg[indexImgToShow].className = 'image-to-show show'
}

function stopShowing() {
    clearInterval(intervalToShow)
}

function continueShowing() {
    clearInterval(intervalToShow);
    nextImg();//для більш логічної роботи слайдера
    intervalToShow = setInterval(nextImg, 10000);
}

// galleryShow();
// function addBtn(text, whereToAdd, listener) {
//     let btn = document.createElement('button');
//     btn.innerText = text;
//     whereToAdd.after(btn);
//     btn.addEventListener('click', listener)
//     // btn.classList.add((text.split(' ').join('')).toLowerCase());
// }

//
// function galleryShow() {
//     let firstImg = gallery.children[0];
//     let images = gallery.children;
//
//     let stopBtn = document.createElement('button');
//         stopBtn.innerText='Stop';
//     // console.log(stopBtn);
//     // console.log(gallery);
//     // let contbtn = document.createElement('button');
//     // contbtn.innerText='Continue';
//     // stopBtn.after(gallery);
//     // contbtn.after(stopBtn);
//     // console.log(contbtn);
//     // console.log(gallery);
//
//     // stop.addEventListentr()
//     for (let i = 1; i < images.length; i++) {
//         hideImg(images[i]);
//     }
//     for (let i = 0; i < images.length; i++) {
//         let intervalId;
//         intervalId = setInterval(changeImg, 2000, images, i);
//
//     }
// }
// function clearTimeID(id) {
//     clearInterval(id)
// }
//
// function showImg(target) {
//     target.classList.remove('hide');
// }
//
// function hideImg(target) {
//     target.classList.add('hide');
// }
//
// function changeImg(target, i) {
//     if (!target[i].classList.contains('hide')) {
//         setTimeout(() => {
//             if (target[i].nextElementSibling) {
//                 showImg(target[i].nextElementSibling);
//             } else showImg(target[0]);
//         });
//         hideImg(target[i]);
//     }
// }
//
