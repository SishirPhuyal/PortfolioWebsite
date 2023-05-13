$(document).ready(function(){
  var pagetracker = 1
  var lastslide = 4
  function tracker() {
    if (pagetracker==1) {
      $("#prev").hide();

    }
    else if (pagetracker==lastslide) {
      $("#next").hide();
    }
    else {
      $("#prev").show();
      $("#next").show();
    }
  }
  tracker();
  $("#next").click(function(){
      $("#next").hide();
      $("#prev").hide();
      setTimeout(() => {
                        console.log('Hello World!');
                      }, 1000);
      pagetracker+=1;
      tracker();
      $("#next").show();
      $("#prev").show();
      console.log(pagetracker);
    });
  $("#prev").click(function(){
      $("#next").hide();
      $("#prev").hide();
      setTimeout(() => {
                          console.log('Hello World!');
                        }, 1000);
      pagetracker-=1;
      tracker();
      $("#next").show();
      $("#prev").show();
      console.log(pagetracker);
    });
var textWrapper = document.querySelector('.movingTittle');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.movingTittle .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  })

});
