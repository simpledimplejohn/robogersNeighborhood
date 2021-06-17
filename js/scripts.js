// Business Logic

function rogoberize(number) {
  let arr = [];
  let num = number
  for (let i = 0; i <= num; i++) {
    arr.push(i);
    
    if (i === 3) {
      arr[i] = "Won't you be my neighbor?";
    } else if (i === 2) {
      arr[i] = "Boop!";
    } else if (i === 1) {
      arr[i] = "Beep!";
    }       
  }
  return arr;
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



