$(document).ready(function() { 
  $("#number-form").submit(function(event) {
    event.preventDefault();
    
    let value = "5";
    function robogerize(number) {
      for (var i = 0; i <= number; i ++) {
        let Array = []
        let newArray = Array.push(i);
      }
      return newArray;
    }
    console.log(robogerize(value))

    $("#original").text(value);
    $("#robogerized").text(newArray);
  });
});


function testExample(example) {
  let arr = [];
  let num = example
  for (var i = 0; i <= num; i++) {
      arr.push(i);
  }
  console.log(arr);
}



console.log(testExample(31))