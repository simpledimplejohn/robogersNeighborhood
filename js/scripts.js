$(document).ready(function() { 
  $("#number-form").submit(function(event) {
    event.preventDefault();
    let lowEnd = 0;
    let highEnd = $('#number').val();
    var array = [];
    let newArray = [];
    function robogerize(array) {
      while(lowEnd <= highEnd) {
        array.push(lowEnd++);
      }
      
      array.forEach(function(element) {
        if (element === "3") {
          newArray.push("Won't you be my neighbor");
          console.log(element);
        }
      });
      return newArray;
    }
    



    let robogerized = robogerize(newArray)

    $("#original").text(highEnd);
    $("#robogerized").text(robogerized);
  });
});
