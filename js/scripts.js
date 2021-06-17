function rogoberize(number) {
  let arr = [];
  let num = number
  for (let i = 0; i <= num; i++) {
    arr.push(i);
    let compare = arr[i];
    if (compare === 3) {
      arr[i] = "Won't you be my neighbor?";
    } else if (compare === 2) {
      arr[i] = "Boop!";
    } else if (compare === 1) {
      arr[i] = "Beep!";
    }       
  }
  return arr;
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



