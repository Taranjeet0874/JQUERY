$('h1').click(function(){
  console.log('h1 is clicked');
  $(this).text("i was changed")
})

$('li').click(function(){
  console.log("any list item is clicked");
})

$('input').eq(0).keypress(function(){
  $('h3').toggleClass('turnBlue');
})
$('h1').on("mouseenter",function(){

  $(this).toggleClass("turnBlue")
})

$('input').eq(1).on("click",function(){
  $('.container').fadeOut(3000); // ,slideUp
})
