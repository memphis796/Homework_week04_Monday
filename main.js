$(document).ready(function(){
var signs;
var numberOne;
var numberTwo;
var $complete = $("total");


function clear() {

}

$("#display").click(function) {
  var clickNumber = $(this).text();
})

$("#keys").click(function(){
var clickDigit = $(this).text()
var val = $complete.val();
var new number;
if (val === "0"){
  new number = clickDigit;
}
 else {
   
 }
})

$("#equal").click(function(){
  var total;

   if (signs === "+"){
   total = numberOne + numberTwo;
   }
   else if (signs === "-"){
   total = numberOne - numberTwo;
   }
   else if( signs ==== "/"){
    total = numberONe / numberTwo;
   }
   else if (signs === "x"){
     total = numberONe xnumberTwo;
   }


})


$("#c").click(function(){
  clear();
})
