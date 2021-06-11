$(document).ready(function() {

  let comparator = ['1', '2', '3', '4', '5'];
  

  $("#number-form").submit(function(event) {
    event.preventDefault();
    
    let input = $('#number').val();
    let inputArr = input.split(" ");
    
    function robogerize(array) {
      
      
      for(let i = 0; i < array.length; i++) {
        let firstLetter = array[i].charAt(0);
        
        if(comparator.indexOf(firstLetter.toUpperCase()) !== -1) {
          array[i] = array[i] + "ay";
        } 
        

      }
      return array;
    }
  
    let robogerized = robogerize(inputArr).join(" ");
  
    $("#original").text(input);
    $("#robogerized").text(robogerized);
  })
  });