document.addEventListener('DOMContentLoaded', onLoaded);
let tabs = document.querySelector('.tabs');
// console.log(tabs);
tabs.addEventListener('click', onClick);

function onLoaded() {
    let AllTab = tabs.children;
    for (let i = 0; i < AllTab.length; i++) {
        if (AllTab[i].classList.contains('active')) {
            let tabTitle = AllTab[i];
            createIDFromNameOfTitle(tabTitle);
            deleteDescription(tabTitle);
        }
    }
}


function onClick(event) {
    let tabTitle = event.target;
    if (tabTitle.classList.contains('tabs-title')) {
        deleteClass(tabTitle);
        addClass(tabTitle);
        createIDFromNameOfTitle(tabTitle);
    }
    deleteDescription(tabTitle);
}

function addClass(target) {
    target.classList.add('active');
}

function createIDFromNameOfTitle(target) {
    target.id = target.innerText.toLowerCase().split(' ').join('');
}

function deleteClass(target) {
    let AllTab = target.parentElement.children;
    for (let i = 0; i < AllTab.length; i++) {
        if (AllTab[i].classList.contains('active')) {
            AllTab[i].classList.remove('active')
        }
    }
}

function deleteDescription(target) {
    let targetID = target.id;
    let descriptionList = document.querySelector('.tabs-content');
    const descriptions = descriptionList.children;
    let length = descriptions.length;
    for (let i = 0; i < length; i++) {
        descriptions[i].classList.add('hidden');
        if (descriptions[i].classList.contains(targetID)) {
            descriptions[i].classList.remove('hidden');
        }
    }
}
