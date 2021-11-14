$(document).ready(function(){
    $("#hidden-text1").hide();
    $("#show-more1").click(function(){
      $("#hidden-text1").slideToggle();
      $("#show-more1").html() == "Read More" ? $("#show-more1").html('Read Less') : $("#show-more1").html('Read More');
    });
    $("#hidden-text2").hide();
    $("#show-more2").click(function(){
      $("#hidden-text2").slideToggle();
      $("#show-more2").html() == "Read More" ? $("#show-more2").html('Read Less') : $("#show-more2").html('Read More');
    });
    $("#hidden-text3").hide();
    $("#show-more3").click(function(){
      $("#hidden-text3").slideToggle();
      $("#show-more3").html() == "Read More" ? $("#show-more3").html('Read Less') : $("#show-more3").html('Read More');
    });
  });