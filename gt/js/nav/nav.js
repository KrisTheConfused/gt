//--------------------------------------------
// Links sind wie folgt zu deklarieren:
//  <a href ="#" class = "btn" link="inc/main/home.inc.html">
// Home
// </a>
//--------------------------------------------

$(document).ready(function(){
  $(".btn").click(function(){
    $("#main").load($(this).attr("link"));
  })
});
