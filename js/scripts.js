$(document).ready(function() {

  $("#enterNumber-form").submit(function(event) {
    event.preventDefault();

    const vowelArray = ["a", "e", "i", "o", "u"];
    const text = $("numbers")

    function wayAdder(text, vowelArray) {
      for (let i = 0; i < vowelArray.length; i++) {
        if (text.charAt(0) == vowelArray[i]) {
          return (text + "way");
        } else {
          return false;
        }
      }
    }
    let output = wayAdder(inputArr).join(" ");
  });
});

