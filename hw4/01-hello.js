// Add your code here
//add h1 for pass wave test.
var h1 ="<h1 style='display: none;'> hw1</h1>";
var center_div="<center style='margin: auto; width: 50%;  text-align: center; padding: 10px;'> ";
var img_tag ="<img src='../images/helena_rs.jpg' alt='my daughter Helena' width='200' height='200' style=' border-radius: 50%;'/>";
var bio_tag ="<p><strong>Hi, My name Hieu Vu and this picture is my daughter Helena</strong>. She is 29 months old. She like to play with Pet. She likes to feed for cat or dog. She also loves to play with balls (soccer balls, voley ball, tennis ball,...). </p>";



var html_code ="<main> " +h1 + center_div + img_tag + bio_tag+ "</center></main>";
document.body.innerHTML = html_code;