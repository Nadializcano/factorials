$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = factorialNumber(number);
    $("#result").text(result);
  });
});

var factorialNumber = function(number){
  if (number === 0 || number === 1)
    return 1;
  for (var i = number - 1; i >= 1; i --) {
    number *= i;
  }
  return number;
};
