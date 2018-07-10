$(function(){

  $('.top-btn').click(function(){
    $('html, body').animate({
      'scrollTop':0
    },500);
  });

  $('#park-area').click(function(){
    $('html,body').animate({
      'scrollTop':600
    },500);
  });
});
