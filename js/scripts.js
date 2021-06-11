$(document).ready(function() { 
  $("#number-form").submit(function(event) {
    event.preventDefault();
    let lowEnd = 0;
    let highEnd = $('#number').val();
    var array = [];
    function robogerize(array) {
      while(lowEnd <= highEnd) {
        array.push(lowEnd++);
      }
      return array;
    }
    let robogerized = robogerize(array)

    $("#original").text(highEnd);
    $("#robogerized").text(robogerized);
  });
});
