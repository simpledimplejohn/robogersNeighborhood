$(document).ready(function() { 
  $("#number-form").submit(function(event) {
    event.preventDefault();
    
    let number = $('#number').val();
    console.log(number);
    let newArray = [];
    
    function robogerize(number) {
      let arr = [];
      for (var i = 0; i <= number; i ++) {
        arr.push(i);
      }
      return number;
    }
    



    let robogerized = robogerize(newArray)

    $("#original").text(number);
    $("#robogerized").text(robogerized);
  });
});
