$(document).ready(function() {

  let num1 = "1";
  

  $("#number-form").submit(function(event) {
    event.preventDefault();
    
    let input = $('#number').val();
    let inputArr = input.split(" ");
    
    function robogerize(array) {
      
      for(let i = 0; i < array.length; i++) {
        let lookForOne = array[i];
        
        if(num1.indexOf(lookForOne) !== -1) {
          array[i] =  "beep";
        } 
      }
      return array;
    }
  
    let robogerized = robogerize(inputArr).join(" ");
  
    $("#original").text(input);
    $("#robogerized").text(robogerized);
  })
  });