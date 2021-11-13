$(document).ready(function(){

    $("#hidden-text1").hide();
    $("#show-more1").click(function(){
      $("#hidden-text1").slideToggle();
    });
    $("#hidden-text2").hide();
    $("#show-more2").click(function(){
      $("#hidden-text2").slideToggle();
    });
  });