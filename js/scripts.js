// Business Logic
function rogoberize(number) {
  let arr = [];
  let num = number
  for (let i = 0; i <= num; i++) { 
    arr.push(i);
    i= i.toString();
    if (i.includes("3")) {
      arr.splice(i, 1, "Won't you be my neighbor?");
    } else if (i.includes("2")) {
      arr.splice(i, 1, "boop!");
    } else if (i.includes("1")) {
      arr.splice(i, 1, "beep!");
    }
  }
  return arr
}

// UI Logic
$(document).ready(function() { 
  $("#number-form").submit(function(event) {
    event.preventDefault();
    let value = $("#number").val();
    let output = rogoberize(value)
    $("#original").text(value);
    $("#robogerized").text(output);
  });
});




