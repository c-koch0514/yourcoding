var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
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
    if(check == false){
      $('.privacy').css('color','red');
    }else{
      $('.privacy').css('color','#333333');
    }

    if(name == '' || email == '' ||  content == '' || check == false){
      $('.error').fadeIn();
      return false;
    }else{
      $('.error').fadeOut();
    }

  });


  /*******************          header          **********************/
  var headerTime = 500;
  /*******************header-navの出現方法**********************/
  /*** 2.headerのburger 上下のスライド ***/
  $('#burger-btn').on('click',function(){
    if (window.matchMedia("(max-width: 1021px)").matches) {
      $('#header-nav').slideToggle(headerTime);
      $(this).toggleClass('scroll');
    }
  });
  /** 遷移したらheaderを閉じる **/
  $('.header-nav-item a').click(function(){
    if (window.matchMedia("(max-width: 1021px)").matches) {
      $('#header-nav').delay(headerTime*1.5).slideToggle(headerTime);
      setTimeout(function(){
        $('#burger-btn').toggleClass('scroll');
      },headerTime*2);
    }
  });

  /********  PCサイズの時にheader-navが見えるようにする **************/
  $(window).on("load resize", function() {
    // ロードとリサイズ時の処理
    var win = $(window).width();
    if(win > 1021){
      $('#header-nav').show();
    }else{
      $('#header-nav').hide();
    }
  });
  /*******************        end of header        *******************/
});
