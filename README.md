_Specifications_

Describe: robogerize()
Test: "It should return an array with a 0 if the number 0 is inputted"
Expect(robogerize(0).toEqual([0]);

Describe: robogerize()
Test: "It should return a range of numbers from 0 to the user inputted number when then user inputs a number"
Expect(robogerize(5).toEqual([0, 1, 2, 3, 4, 5]);