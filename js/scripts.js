function rogoberize(number) {
  let arr = [];
  let num = number
  for (let i = 0; i <= num; i++) { 
    arr.push(i);
    string = arr.join(", ");
    string1 = string.replace(/1/g, "beep!");
    string2 = string1.replace(/2/g, "boop!");
    string3 = string2.replace(/3/g, "Won't you be my neighbor?")
  }
  return string3
}


$(document).ready(function() { 
  $("#number-form").submit(function(event) {
    event.preventDefault();
    let value = $("#number").val();
    let output = rogoberize(value)
    $("#original").text(value);
    $("#robogerized").text(output);
  });
});




