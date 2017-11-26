$(function() {
  $( "footer" ).hide(); //Hide the footer at page load
  /*var d = new Date();
    console.log(d.getHorus());
   */
 /*This function was modified from : https://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom
  * User answer: Nick Craver♦
  * The original function alerted when the bottom of the page had been reached
  * Modified 8 Nov 2017 to display the footer when bottom is reached
  */
 $(window).scroll(function() {
   $( "footer" ).hide();  //Hides footer when window scrolled 

   /*
    * Check to see if the window is at the bottom
    */
   if($(window).scrollTop() + $(window).height() == $(document).height()) {

    $( "footer" ).show(); 
    $("footer").text('Created by Nathan Gaffney'); //Adjust the footer text
    //Make sure the color of the text comes out properly
    $('footer').css({
      'color': '#FFCC00', //footer color to svsu gold
      'font-size' :'10px' //force font sixe (not necessary)
    });
   }
	});
});