$(function(){

  var $window = $(window);		//Window object

  var scrollTime = 1.2;			//Scroll time
  var scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

  $window.on("mousewheel DOMMouseScroll", function(event){

    event.preventDefault();

    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);

    TweenMax.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
      ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
      autoKill: true,
      overwrite: 1
    });

  });

});

var controller = new ScrollMagic.Controller();

var scene121 = new ScrollMagic.Scene({triggerElement: "#first-para-container", offset: 150, duration: 10})
  .setTween("#title",1,{opacity:0})
  .addTo(controller);

var scene1 = new ScrollMagic.Scene({triggerElement: "#first-para-container", offset: 120, duration: 2700})
  .setPin("#picContainer")
  .setTween("#picContainer",1,{y:-100})
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#first-para-container", offset: 2940, duration: 100})
  .setTween("#picContainer",1,{opacity:0})
  .addTo(controller);



var scene6 = new ScrollMagic.Scene({triggerElement: "#first-para-container", offset: 150, duration: 220})
  .setTween("#first-para" ,1,{ y:120})
  .addTo(controller);

var scene5 = new ScrollMagic.Scene({triggerElement: "#first-para-container", offset: 400, duration: 150})
  .setTween("#first-para" ,1,{opacity: 0})
  .addTo(controller);
var scene453 = new ScrollMagic.Scene({triggerElement: "#first-para-container", offset: 400, duration: 150})
  .setTween("#pic2" ,1,{opacity: 1})
  .addTo(controller);


var scene3= new ScrollMagic.Scene({triggerElement: "#second-para-container", offset: 150,duration: 320})
  .setTween("#second-para" ,1,{opacity: 1,y:300})
  .addTo(controller);

var scene4= new ScrollMagic.Scene({triggerElement: "#second-para-container", offset: 550,duration: 150})
  .setTween("#second-para" ,1,{opacity: 0})
  .addTo(controller);
var scene432= new ScrollMagic.Scene({triggerElement: "#second-para-container", offset: 550,duration: 150})
  .setTween("#pic3" ,1,{opacity: 1})
  .addTo(controller);


var scene22= new ScrollMagic.Scene({triggerElement: "#third-para-container", offset: 350,duration: 420})
  .setTween("#third-para" ,1,{opacity: 1,y:550})
  .addTo(controller);

var scene23= new ScrollMagic.Scene({triggerElement: "#third-para-container", offset: 750,duration: 150})
  .setTween("#third-para" ,1,{opacity: 0})
  .addTo(controller);
var scene232= new ScrollMagic.Scene({triggerElement: "#third-para-container", offset: 750,duration: 150})
  .setTween("#pic4" ,1,{opacity: 1})
  .addTo(controller);


var scene32= new ScrollMagic.Scene({triggerElement: "#fourth-para-container", offset: 550,duration: 520})
  .setTween("#fourth-para" ,1,{opacity: 1,y:800})
  .addTo(controller);

var scene33= new ScrollMagic.Scene({triggerElement: "#fourth-para-container", offset: 1050,duration: 150})
  .setTween("#fourth-para" ,1,{opacity: 0})
  .addTo(controller);
var scene323= new ScrollMagic.Scene({triggerElement: "#fourth-para-container", offset: 1050,duration: 150})
  .setTween("#pic5" ,1,{opacity: 1})
  .addTo(controller);

var scene42= new ScrollMagic.Scene({triggerElement: "#fifth-para-container", offset: 850,duration: 620})
  .setTween("#fifth-para" ,1,{opacity: 1,y:1050})
  .addTo(controller);

var scene43= new ScrollMagic.Scene({triggerElement: "#fifth-para-container", offset: 1350,duration: 150})
  .setTween("#fifth-para" ,1,{opacity: 0})
  .addTo(controller);


var scene53= new ScrollMagic.Scene({triggerElement: "#fifth-para-container", offset: 1400,duration: 150})
  .setTween("#down" ,1,{y:0})
  .addTo(controller);


var scene73= new ScrollMagic.Scene({triggerElement: "#fifth-para-container", offset: 2000})
  .setTween("#down" ,1,{y:0})
  .addTo(controller);




$(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {


    var foot = document.querySelectorAll(".foot");
    TweenMax.staggerTo(foot, 1, {y:0, opacity:1}, 0.2);
  }
});


const cheesburger = document.querySelector(".shapeshifter");
    cheesburger.addEventListener("click",function () {
    cheesburger.classList.toggle("play");
});
