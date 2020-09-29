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
      pagetracker+=1;
      tracker();
      console.log(pagetracker);
    });
  $("#prev").click(function(){
      pagetracker-=1;
      tracker();
      console.log(pagetracker);
    });
});
