var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 56,
  loop: true,

  autoplay:{
    delay:5000,
    disableOnInteraction: false,
  },

  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  initialSlide: 2,
  centeredSlides : true
});

AOS.init({
  offset: 140,
  delay: 100,
  duration: 500,
  // easing: 'ease-in',
  once: false,

});

$(function(){
	
  $('header a, .contact-btn a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top - $('header').outerHeight();
    
    $('html,body').animate({ 
      'scrollTop': position 
    }, 600);
  });


  /***************** FQAアコーディオン **********************/
  $('.question').on('click', function () {
    $(this).next().slideToggle();
  });
  $('.answer').on('click', function () {
    $(this).slideToggle();
  });
  /*********************************************************/
  
  $("#contact-form").submit(function(){
    var name = $('#name').val();
    var email = $('#email').val();
    var content = $('#form-content').val();
    var check = $('#check').prop('checked');

    if(name == ''){
      $('#name').prev().find('p').fadeIn();
    }else{
      $('#name').prev().find('p').fadeOut();
    }
    if(email == ''){
      $('#email').prev().find('p').fadeIn();
    }else{
      $('#email').prev().find('p').fadeOut();
    }
    if(content == ''){
      $('#form-content').prev().find('p').fadeIn();
    }else{
      $('#form-content').prev().find('p').fadeOut();
    }

    if(name == '' || email == '' ||  content == '' || check == false){
      $('.error').fadeIn();
      return false;
    }else{
      $('.error').fadeOut();
    }

  });

});
