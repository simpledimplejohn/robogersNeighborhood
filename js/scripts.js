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
      array.forEach(function(element) {
        if (element === "3") {
          array.push("Won't you be my neighbor");
        }
      });
      return array;
    }
    



    let robogerized = robogerize(array)

    $("#original").text(highEnd);
    $("#robogerized").text(robogerized);
  });
});
