# _Roboger's Neighborhood_

#### _A website that demonstrates looping through arrays_

#### By _**John Blalock**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Java Script_
* _jQuery_

## Description

_This website demonstrates different ways of looping through an array and applying branching by replacing the number 1 with "Beep!", the number 2 with "Boop!", and the number 3 with "Won't you be my neighbor?"._

## Setup/Installation Requirements

* _Clone repository form github_
* _Open index.html_
* _Copy path to Chrome Browser_


## Known Bugs and Future Changes

* _Improve Styling_

## License

_[MIT](https://opensource.org/licenses/MIT)_

_Copyright (c) 2021 John Blalock_

## Github Pages Link

[Portfolio](https://simpledimplejohn.github.io/robogersNeighborhood)

## Contact Information

_simpledimplejohn@gmail.com_

## Specifications ##

Describe: `robogerize()`
Test: "It should return an array with a 0 if the number 0 is inputted"
Expect`(robogerize(0).toEqual([0]);`

Describe: `robogerize()`
Test: "It should return a range of numbers from 0 to the user inputted number when then user inputs a number"
Expect`(robogerize(5).toEqual([0, 1, 2, 3, 4, 5]);`

Describe: `robogerize()`
Test: "It should return search the returned array and replace the number 3 with "Won't you be my neighbor"
Expect`(robogerize(5).toEqual([0, 1, 2, "Won't you be my neighbor?, 4, 5]);`

Describe: `robogerize()`
Test: "It should return search the returned array and replace the number 2 with "Boop!"
Expect`(robogerize(5).toEqual([0, 1, "Boop!", "Won't you be my neighbor?, 4, 5]);`

Describe: `robogerize()`
Test: "It should return search the returned array and replace the number 1 with "Beep!"
Expect`(robogerize(5).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?, 4, 5]);`