$(document).ready(function() {

  $("#enterNumber-form").submit(function(event) {
    event.preventDefault();
    
    let input = $('#numbers').val();
    let testArray = ["1","2","3"];

    function numbersChange(array) {
      let text = [];
      text = input.split(" "); 
      function vowelFinder(text, testArray) {
        for (let i = 0; i < testArray.length; i++) {
          if (text === testArray[i]) {
            return i;
          };
          return -1;
        }
      }
      return array;
    }  
    let robogersText = numbersChange(inputArr).join(" ");
    $("#original").text(input);
    $("#output").text(robogersText);
  })
  });