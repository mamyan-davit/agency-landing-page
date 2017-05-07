$(document).ready(function(){
  //SET OPTION
  var speed = 500; //fadespeed
  var autoswitch = true //auto slider option
  var autoswitch_speed = 5000 //auto slider speed

  //ADD INITIAL ACTIVE CLASS
  $('.slide').first().addClass('active');

  //HIDE ALL SLIDES
  $('.slide').hide();

  //SHOW FIRST SLIDE
  $('.active').show();

  //FUNCTIONALITY OF NEXT
  $('#next').on('click', nextSlide);


  //FUNCITONALITY OF PREVIOUS
  $('#prev').on('click', prevSlide);

  //AUTOSWITCH
  if (autoswitch==true) {
    setInterval(nextSlide, autoswitch_speed)
  }

  //SWITCH TO THE NEXT SLIDE
  function nextSlide() {
    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':last-child')) {
      $('.slide').first().addClass('active');
    }else{
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');

    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

  function prevSlide() {
    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':first-child')) {
      $('.slide').last().addClass('active');
    }else{
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');

    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }
})