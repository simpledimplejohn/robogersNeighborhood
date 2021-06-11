$(document).ready(function() {

  let num1 = "1";
  
// test number 1
  $("#number-form").submit(function(event) {
    event.preventDefault();
    let lowEnd = 0;
    let highEnd = $('#number').val();
    var array = [];
    while(lowEnd <= highEnd) {
      array.push(lowEnd++);
    }
    
    

    $("#original").text(highEnd);
    $("#robogerized").text(array);
  });
});
