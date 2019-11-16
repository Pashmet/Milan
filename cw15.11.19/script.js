// $('.gallery').slick({autoplay:true});
// ==============

$(document.body).on('click', '[rel = "modal:open"]', openModal);

function openModal(event) {
    const selector = $(this).attr('href');
    const modal = $(selector);
    modal.show();
    // console.log($(this).attr('href'));
    // console.log(this);
}
$(document.body).on('click', '[rel = "modal:close"]', closeModal);

function closeModal(event) {
  const modal = $(this).closest('.modal').hide();
}




$.fn.fe15Modal = function () {
    this.show();
};

$('#ex1').fe15Modal();