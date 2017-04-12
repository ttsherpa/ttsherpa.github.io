jQuery(document).ready(function($){
$('.cd-header').css("background-color", "transparent");
$(window).scroll(function(){
if ($(this).scrollTop() > .9*$(window).height()) {
$('.cd-main-nav a').css("color", "black").css("transition","0.3s ease-in-out");
} 
if ($(this).scrollTop() < .9*$(window).height()) {
$('.cd-main-nav a').css("color", "white").css("transition","0.3s ease-in-out ");
} 
if ($(this).scrollTop() >= 1.9*$(window).height()) {
$('.cd-main-nav a').css("color", "white").css("transition","0.3s ease-in-out ");
} 
if ($(this).scrollTop() >= 2.9*$(window).height()) {
$('.cd-main-nav a').css("color", "black").css("transition","0.3s ease-in-out ");
} 
if ($(this).scrollTop() > 3.9*$(window).height()) {
$('.cd-main-nav a').css("color", "white").css("transition","0.3s ease-in-out ");
} 
if ($(this).scrollTop() > 4.9*$(window).height()) {
$('.cd-main-nav a').css("color", "black").css("transition","0.3s ease-in-out ");
}
if ($(this).scrollTop() > 5.9*$(window).height()) {
$('.cd-main-nav a').css("color", "white").css("transition","0.3s ease-in-out ");
}
if ($(this).scrollTop() > 6.9*$(window).height()) {
$('.cd-main-nav a').css("color", "black").css("transition","0.3s ease-in-out ");
}
});
});