$(document).ready(onLoaded);

let $tabs = $('.tabs');
$tabs.on('click', onClick);

function onLoaded() {
    $('.tabs-title').each(function () {
        if ($(this).hasClass('active')) {
            createIDFromNameOfTitle($(this));
            deleteDescription($(this));
        }
    })
}

function createIDFromNameOfTitle($target) {
    $target.attr('id',
        $target.text().toLowerCase().split(' ').join(''));
}

function deleteDescription($target) {
    let $targetID = $target.attr('id');
    let $descriptionList = $('.tabs-content');
    let $descriptions = $descriptionList.children();
    $descriptions.each(function () {
        $(this).hide();
        if ($(this).hasClass($targetID)) {
            $(this).show();
        }
    });
}


function onClick(event) {
    let $tabTitle = $(event.target);
    if ($tabTitle.hasClass('tabs-title')) {
        deleteClass($tabTitle);
        addClass($tabTitle);
        createIDFromNameOfTitle($tabTitle);
    }
    deleteDescription($tabTitle);
}

function addClass(target) {
    target.addClass('active');
}

function deleteClass(target) {
    let $AllTab = target.siblings();
    $AllTab.each(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        }
    });
}