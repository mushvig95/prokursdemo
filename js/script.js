$(document).ready(function(){
    $('.feedbacks__slider').slick({
      dots:true
    });
  });


  // map api

function initMap(){
  //map for location 1
  var element = document.getElementById('map');
  var option1 = {
    zoom: 17,
    center: {lat: 40.3854611,lng: 49.8374739},
    mapTypeControl: false,
    gestureHandling: 'cooperative',
    disableDefaultUI: true
  };
  var myMap = new google.maps.Map(element, option1);
  var myMarker1 = new google.maps.Marker({
    position: {lat: 40.3854611,lng: 49.8374739},
    map: myMap
  });
  //map for location 2
  var element = document.getElementById('map2');
  var option2 = {
    zoom: 18,
    center: {lat:40.3785442,lng:49.8485665},
    mapTypeControl: false,
    gestureHandling: 'cooperative',
    disableDefaultUI: true
  };
  var myMap2 = new google.maps.Map(element, option2);
  var myMarker2 = new google.maps.Marker({
    position: {lat:40.3785442,lng:49.8485665},
    map: myMap2
  });
};



//click on skidki-uchashimsa
$('.discount__buttons-btn2').click(function(){

  $('.discount__box-content').css({
                                    'display':'none',
                                    'opacity':'0'
  });
 
  $('.discount__box-content-2').css({
                                      'display':'block',
                                      'opacity':'1'
  });
  

  $('.discount__buttons-btn2').css({
                                      'backgroundColor':'rgba(255,255,255,.6)',
                                      'color': '#000'

  });
  $('.discount__buttons-btn1').css({
                                      'backgroundColor':'rgba(255,255,255,.2)',
                                      'color': '#fff'
  });

});


//click on dop-skidki
$('.discount__buttons-btn1').click(function(){

  $('.discount__box-content-2').css({
                                      'display':'none',
                                      'opacity':'0'
  });

  $('.discount__box-content').css({
                                    'display':'block',
                                    'opacity':'1'
  });

  $('.discount__buttons-btn1').css({
                                      'backgroundColor':'rgba(255,255,255,.6)',
                                      'color': '#000'
  });

  $('.discount__buttons-btn2').css({
                                      'backgroundColor':'rgba(255,255,255,.2)',
                                      'color': '#fff'
  });
});

//prevent mobile from scrolling
var fixed = document.getElementById('popup');
fixed.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, false);

//click on address to change number
$('.header__box-address2').click(function(){
  $('.header__box-number1').css('display','none');
  $('.header__box-number2').css('display','block');
  $('.header__box-number2').css('opacity','1');
});

$('.header__box-address1').click(function(){
  $('.header__box-number2').css('display','none');
  $('.header__box-number1').css('display','block');
});

//click to trigger popup 

$('.discount-main-button').click(function(){
  $('.popup').css('display','block');
  
  $('.body').css('overflow','hidden');
 
});

$('.slogan__button').click(function(){
  $('.popup').css('display','block');
  $('.body').css('overflow','hidden');
});

$('.footer__btn').click(function(){
  $('.popup').css('display','block');
  $('.body').css('overflow','hidden');
  $('.highlights__form-inner-item-city').css('display','none');
});

$('.popup__form-box-close').click(function(){
  $('.popup').css('display','none');
  $('.body').css('overflow','visible');
  $('.highlights__form-inner-item-city').css('display','block');
});

// map buttons click
$('.map__btns-btn2').click(function(){
  $('#map').css('display','none');
  $('#map2').css('display','block');
  $('.map__btns-btn2').css({
                            'backgroundColor':'#9b1818',
                            'color':'#fff'
  });
  $('.map__btns-btn1').css({
                            'backgroundColor':'#fff',
                            'color':'#9b1818'
});
});

$('.map__btns-btn1').click(function(){
  $('#map2').css('display','none');
  $('#map').css('display','block');
  $('.map__btns-btn1').css({
                            'backgroundColor':'#9b1818',
                            'color':'#fff'
  });
  $('.map__btns-btn2').css({
                            'backgroundColor':'#fff',
                            'color':'#9b1818'
});
});


//scroll reveal

window.sr = ScrollReveal();
sr.reveal('.highlights__header',{
  duration: 2000,
  origin: 'bottom',
  distance:'100px',
  //reset:true
  
});
sr.reveal('.highlights__items-item',{
  duration: 2000,
  origin: 'left',
  distance:'900px',
  useDelay: 'always',
  //reset:true
});
sr.reveal('.highlights__form',{
  duration: 2000,
  origin: 'right',
  distance:'900px',
  useDelay: 'always',
  //reset:true
});
sr.reveal('.feedbacks__heading',{
  duration: 2000,
  origin: 'bottom',
  distance:'50px',
  //reset:true
});
sr.reveal('.slogan__box',{
  duration: 2000,
  origin: 'bottom',
  distance:'80px',
  easing:'ease',
  scale: 0,
  //reset:true
});
sr.reveal('.map__text',{
  duration: 2000,
  origin: 'left',
  distance:'900px',
  reset:true
});
sr.reveal('.map__btns',{
  duration: 2000,
  origin: 'right',
  distance:'900px',
  //reset:true
});


