$(document).ready(function() { 
  $("#number-form").submit(function(event) {
    event.preventDefault();
    let value = $("#number").val();

    function rogoberize(number) {
      let arr = [];
      let num = number
      for (let i = 0; i <= num; i++) {
          arr.push(i);
          let compare = arr[i];
          if(compare === 1) {
            arr[i] = "Beep!";
          } 
          
      }
      return arr;
    }
    let output = rogoberize(value)


    $("#original").text(value);
    $("#robogerized").text(output);
  });
});