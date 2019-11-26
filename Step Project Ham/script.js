$('.services-item').on('click', chooseTabService);

$('#webDesign').append("<span class='down-arrow'></span>")
    .addClass('services-item-background')
    .siblings().removeClass('services-item-background')
    .children('.down-arrow').remove();

$('li[data-design = "webDesign"]').show()
    .siblings().hide();

function chooseTabService() {
    $(this).append("<span class='down-arrow'></span>")
        .addClass('services-item-background')
        .siblings().removeClass('services-item-background')
        .children('.down-arrow').remove();
    let $id = $(this).attr('id');
    $('li[data-design = ' + $id + ']').show()
        .siblings().hide()
}


// ===============/

$('.work-image:lt(12)').show();

$('.work-link').on('click', showMoreImg);

function showMoreImg() {
    $('.work-image').show();
    $('.work-link').remove();
}

// =====================

$('.work-category').on('click', filterFunktion);

function filterFunktion() {
    $(this).addClass('work-category-active')
        .siblings().removeClass('work-category-active');
    if ($(this).attr('data-filter')) {
        $('.work-image').hide(500).filter('[data-category ="' + $(this).attr('data-filter') + '"]').show(500);
    } else {
        $('.work-image').show(500)
    }
}

// ==============================

$('.people-min-img').on('click', changePeople);
$('.reviews-review').first().show()
.siblings().hide();
function changePeople() {
    let $el = $(this);
    let $name = getData('name', $el);
    let $surname = getData('surname', $el);
    let $profesion = getData('profesion', $el);
    let $src = $el.attr('src');

    $('.people-img').attr('src', $src);
    $('.people-name').text($name + ' ' + $surname);
    $('.people-profession').text($profesion);

    $el.addClass('people-min-img-active')
        .parent().siblings().children().removeClass('people-min-img-active');

    $('[data-whoComment = ' + ($name+$surname) + ']').show()
        .siblings().hide()
}

function getData($dataAtr, $el) {
    return $el.data($dataAtr);
}

// =======

$('.arrow').on('click', changePeopleTo);
function changePeopleTo() {
    // let $comments = $('.reviews-review');
    let $neededEl;
    let $firstEl = $('.people-min-img').first();
    let $lastEl = $('.people-min-img').last();

    let $nextEl = $('.people-min-img-active').parent().next().children();
    let $prevEl = $('.people-min-img-active').parent().prev().children();
    if ($(this).hasClass('r-arrow')) {
        if (!$nextEl.hasClass('arrow')) {
            $neededEl = $nextEl;
        } else {
            $neededEl = $firstEl;
        }
    } else {
        if (!$prevEl.hasClass('arrow')) {
            // console.log($prevEl.length)
            $neededEl = $prevEl;
        } else {
            $neededEl = $lastEl
        }
    }
    let $name = getData('name', $neededEl);
    let $surname = getData('surname', $neededEl);
    let $profesion = getData('profesion', $neededEl);
    let $src = $neededEl.attr('src');
    // let $whoComment = getData('whoComment', $comments);
    $('.people-img').attr('src', $src);
    $('.people-name').text($name + ' ' + $surname);
    $('.people-profession').text($profesion);

    $neededEl.addClass('people-min-img-active')
        .parent().siblings().children().removeClass('people-min-img-active')
// console.log($comments.data('whocomment',($name+$surname)));
// console.log(($name+$surname));

    $('[data-whoComment = ' + ($name+$surname) + ']').show()
        .siblings().hide()

}


function getComment(who, what) {

}