//This will write zippy dee to teh end of teh page
document.write("zippy dee"); //If it was onload it would overwrite the page

//Change teh style of teh body to yellow
document.body.style = "background-color: yellow;"

//Change backgorund of first h1 tag to red
document.getElementsByTagName("h1")[0].style= "background-color:red";
var d = document.getElementsByTagName("h1");
console.log(d);
d[1].style= "background-color: blue";
//Create a variable that is a p tag
var a = document.createElement("p");

var b = document.createTextNode("This si a paragraph");

/*This will wipe out everything in the page and replace with test
* Example from https://stackoverflow.com/questions/41189713/how-do-i-overwrite-an-entire-document-with-javascript
* "You can use document.implementation.createDocumentType to rewrite the doctype and document.getElementsByTagName to get the DOM elements
* then rewrite with innerHTML and setAttribute."
* document.getElementsByTagName("html")[0].innerHTML = 'test';  //Leaving out
*/
//Blast everything 
document.getElementsByTagName("html")[0].innerHTML = '';
/* Bgein making the following webpage
 *<html>
 * <head>
 *   <title>My title</title>
 * </head>
 * <body>
 *   <a href="#">My link</a>
 *   <h1>My header</h1>
 *   <p>Lorem Ipsum</p>
 *   <h1>Another h1</h1>
 * </body>
 * <script src="dom.js"></script>
 *</html>
 */
var aTitle = document.createElement("title");              //create title tag
var aTitleTextNode = document.createTextNode("My title");  //create text 
aTitle.append(aTitleTextNode);                             //add text to tag
document.head.appendChild(aTitle);                         //append title tag to head

var aTag = document.createElement("a");
var aTagTextNode = document.createTextNode("My link");
aTag.setAttribute("href","#");
aTag.append(aTagTextNode); //aTag is now:  <a href="#">My link</a>
document.body.appendChild(aTag);

var aHead = document.createElement("h1");
var aHeadTextNode = document.createTextNode("My header");
aHead.setAttribute("onclick","alert('hello')"); //When h1 is clicked alert
aHead.append(aHeadTextNode);
document.body.appendChild(aHead);
/* Change what happens when you click h1 after you click h1
document.getElementsByTagName("h1")[0].onclick = function(){
  //alert('goodby');
  aHead.setAttribute("onclick","alert('hello')");
}







document.getElementsByTagName("h1")[0].onclick = function(){
  //alert('goodby');
  document.getElementsByTagName("h1")[0].onclick = function(){
  console.log(document.URL);
}
}
*/

//Create an input field
var aInput = document.createElement("input");
var aInputTextNode = document.createTextNode("Insert Text");
aInput.setAttribute("type", "text");
aInput.setAttribute("id", "input1");
aInput.setAttribute("value", "");
document.body.appendChild(aInput);

//Create a span to hold the result string
var aSpan = document.createElement("span");
aSpan.setAttribute("id","span1");
document.body.appendChild(aSpan);

/* Whenever user types a character into the input field
 * add a the letter and a period to teh result span
 */
document.getElementById("input1").onkeyup = function(){
  var s = document.getElementById("input1").value;
  var result = "";
  for (var i = 0, len = s.length; i < len; i++) {
    result += s[i] + ".";
  }
  document.getElementById("span1").innerHTML = result;
}
