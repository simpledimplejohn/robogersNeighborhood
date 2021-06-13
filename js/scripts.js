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
          if(compare === 3) {
            arr[i] = "Won't you be my neighbor?";
          } 
          
      }
      return arr;
    }
    let output = rogoberize(value)


    $("#original").text(value);
    $("#robogerized").text(output);
  });
});