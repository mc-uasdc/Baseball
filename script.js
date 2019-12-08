
$(".bye").dblclick(function() {
    $(".bye").hide();    
   $(".hide").toggle();
    
   });
   
$(".hide").dblclick(function() {
    $(".hide").toggle();
     $(".heyy").show();
});

$(".heyy").dblclick(function() {
    $(".heyy").hide();
    $(".lol").show();
});


$(".lol").dblclick(function() {
    $(".lol").fadeOut();
    $("h1").text("hello bseball");
    $(".baseball").fadeIn();
});

$(".baseball").dblclick(function(){
    $(".baseball").fadeIn();
});

