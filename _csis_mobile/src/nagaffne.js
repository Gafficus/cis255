$(function() {
  $( "footer" ).hide();
  /*var d = new Date();
    console.log(d.getHorus());
   */
 /*This function was modified from : https://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom
  * User answer: Nick Craver♦
  * The original function alerted when teh bottom of teh page had been reached
  * Modified 8 Nov 2017 to display the footer when bottom is reached
  */
 $(window).scroll(function() {
   $( "footer" ).hide();   
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
    $( "footer" ).show(15);
   }
	});
});