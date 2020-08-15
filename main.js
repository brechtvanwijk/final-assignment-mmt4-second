// autoplay trailervideo
    document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('playVid').addEventListener('click', event => {
    document.getElementById('trailervideo').src = "https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1";
  });
});


  // change z-index video's
  function myFunction() {
    document.getElementById("player-1").style.zIndex = "4";
    document.getElementById("player-2").style.zIndex = "1";
    document.getElementById("player-3").style.zIndex = "1";
  }
  
  function myFunction2() {
    document.getElementById("player-2").style.zIndex = "4";
    document.getElementById("player-1").style.zIndex = "1";
    document.getElementById("player-3").style.zIndex = "1";
  }
  
  function myFunction3() {
    document.getElementById("player-3").style.zIndex = "4";
    document.getElementById("player-1").style.zIndex = "1";
    document.getElementById("player-2").style.zIndex = "1";
  }

/*play-pause video 1*/ 
$('#my-video-1').each(function(i,el){
    var video = $(el).parent();
 
    $('.play-pause', video).click(function(){
 
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        el.pause();
   
      } else {
       $(this).addClass('active');
       $('i').toggleClass('active')
       el.play();
      }
    });
 });

/*play-b en play-f buttons 1*/
$('#my-video-1').each(function(i, el){
    var videoH = $(el).parent();
    var btnr = document.querySelector('.play-b1');
    var btnf = document.querySelector('.play-f1');
  
    $(btnr, videoH).click(function(){
     el.currentTime = el.currentTime - 10;
    });
  
    $(btnf, videoH).click(function(){
      el.currentTime = el.currentTime + 10;
     });
  });


  /*play-pause video 2*/ 
$('#my-video-2').each(function(i,el){
  var video = $(el).parent();

  $('.play-pause', video).click(function(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      el.pause();
    } else {
     $(this).addClass('active');
     $('i').toggleClass('active')
     el.play();
    }
  });
});



/*play-b en play-f buttons 2 */
$('#my-video-2').each(function(i, el){
  var videoH = $(el).parent();
  var btnr = document.querySelector('.play-b2');
  var btnf = document.querySelector('.play-f2');

  $(btnr, videoH).click(function(){
   el.currentTime = el.currentTime - 10;
  });

  $(btnf, videoH).click(function(){
    el.currentTime = el.currentTime + 10;
   });
});

  /*play-pause video 3*/ 
  $('#my-video-3').each(function(i,el){
    var video = $(el).parent();
  
    $('.play-pause', video).click(function(){
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        el.pause();
      } else {
       $(this).addClass('active');
       $('i').toggleClass('active')
       el.play();
      }
    });
  });
  
  /*play-b en play-f buttons 3 */
  $('#my-video-3').each(function(i, el){
    var videoH = $(el).parent();
    var btnr = document.querySelector('.play-b3');
    var btnf = document.querySelector('.play-f3');
  
    $(btnr, videoH).click(function(){
     el.currentTime = el.currentTime - 10;
    });
  
    $(btnf, videoH).click(function(){
      el.currentTime = el.currentTime + 10;
     });
  });

    /*hover knoppen */
$('.video-player').hover(function(){
    $('.controls').css({
      'opacity': '100%',
    });
   

  }, function(){
    $('.controls').css({
      'opacity': '0',
  })
  });



// tabs

$(function() {

    $('.tab-panels .tabs li').on('click', function() {

        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        var panelToShow = $(this).attr('rel');

        $panel.find('.panel.active').slideUp(300, showNextPanel);

        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });
        }
    });

});

// de modal met trailer video

var modal = document.getElementById("myModal");
var btn = document.getElementById("trailerbtn");
var span = document.getElementsByClassName("close")[0];

//open modal knop
btn.onclick = function() {
  modal.style.display = "block";
  
}

//sluit the modal
span.onclick = function() {
  modal.style.display = "none";
}

// sluiten als je buiten de modal klikt
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');

modalBtn.addEventListener('click',function(){
    modalBg.classList.add('.bg-active');
});



