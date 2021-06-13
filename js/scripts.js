$(document).ready(function() { 
  $("#number-form").submit(function(event) {
    event.preventDefault();
    let value = $("#number").val();

    function testExample(example) {
      let arr = [];
      let num = example
      for (let i = 0; i <= num; i++) {
          arr.push(i);
      }
      return arr;
    }
    let output = testExample(value)


    $("#original").text(value);
    $("#robogerized").text(output);
  });
});


// function testExample(example) {
//   let arr = [];
//   let num = example
//   for (let i = 0; i <= num; i++) {
//       arr.push(i);
//   }
//   console.log(arr);
// }
// console.log(testExample(31))