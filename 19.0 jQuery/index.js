$("#one").click(function(){
    $("h1").css("color","purple");
    setTimeout(function() {
    $("h1").css("color","yellow");
    }, 300);
});
$("#two").click(function(){
    $("h1").slideUp().slideDown();
});

$("#three").click(function(){
    $("h1").hide();
});

$("#four").click(function(){
    $("h1").show();
});

$("body").keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color","black");
});