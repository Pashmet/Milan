let tabs = document.querySelector('.tabs');
// console.log(tabs);
tabs.addEventListener('click', onClick);
// tabs.addEventListener('DOMContentLoaded', onLoaded);
//
// let descriptions = document.querySelector('.tabs-content');
// console.log(descriptions.children);
// function onLoaded() {
// if(tabs.children)
// }


function onClick(event) {
    // let tabTitle = event.target.
// event.target.classList.contains('tabs-title');
    // ============add class
    if (event.target.classList.contains('tabs-title')) {
        let tabTitle = event.target;
        // console.log(tabTitle);
        deleteClass(event);
        tabTitle.classList.add('active');
        tabTitle.id = tabTitle.innerText.toLowerCase().split(' ').join('');
        // console.log(tabTitle.id);
        // console.log(tabTitle.parentElement.children);
        // console.log(tabTitle.);
    }
    deleteDescription(event);

}

function deleteClass(event) {
    if (event.target.classList.contains('tabs-title')) {
        let otherTab = event.target.parentElement.children;
        // console.log(otherTab);
        // console.log(otherTab);
        // console.log(otherTab.length);
        // console.log(otherTab[1]);
        for (let i = 0; i < otherTab.length; i++) {
            if (otherTab[i].classList.contains('active')) {
                otherTab[i].classList.remove('active')
            }
            // otherTab.forEach(tab=>{
            //     let activeTab =  tab.classList;
            //     if(activeTab.contains('active')){
            //         activeTab.remove('active')
            //     }
            // });
            // if(otherTab.classList.)
            // otherTab.classList.remove('active');
            //
        }
    }
}

function deleteDescription(event) {
    let targetID = event.target.id;
    console.log(targetID);
    let descriptions = document.querySelector('.tabs-content');
    const oneDescription = descriptions.children;
    // console.log(oneDescription);
    let length = oneDescription.length;
    for (let i = 0; i < length; i++) {
        // console.log(oneDescription[i]);
        // console.log(length);
        // oneDescription[i].remove();
        // oneDescription[i].classList.remove('hidden');
        oneDescription[i].style.display = '';
        if (!oneDescription[i].classList.contains(targetID)) {
            // console.log(getComputedStyle(oneDescription[i]));

            // oneDescription[i].classList.add('hidden');
            oneDescription[i].style.display = 'none';


            // oneDescription[i].id = oneDescription[i].;
        }
    }
}