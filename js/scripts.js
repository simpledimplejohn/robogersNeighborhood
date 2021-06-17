function rogoberize(number) {
  let arr = [];
  let num = number
  for (let i = 0; i <= num; i++) { 
    arr.push(i);
    i= i.toString();
    if (i.includes("1")) {
      arr.splice(i, 1, "beep!")
    }


    // string = arr.join(", ");
    // string1 = string.replace(/1/g, "beep!");
    // string2 = string1.replace(/2/g, "boop!");
    // string3 = string2.replace(/3/g, "Won't you be my neighbor?")
  }
  return arr
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




