/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

function load(){
  console.log("page loaded");
  $("#site-header").slideDown(3,3, function(){
    console.log("Bar down")
  });
}

var topofDiv = $(".landing").offset().top + $(".landing").outerHeight(true); //gets offset of header
$(window).scroll(function(){
    if($(window).scrollTop() > topofDiv){
       $(".sticky-top").removeClass("site-header-light");
       $(".sticky-top").addClass("site-header");
    }
    else{
      $(".sticky-top").removeClass("site-header");
      $(".sticky-top").addClass("site-header-light");
    }
});