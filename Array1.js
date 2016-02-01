// The function for finding the highest in the Array
var myArray = [12.5, 34.7, 82.1, 9.1, 22.8];
var max = 0;

myArray.forEach (function(i) {if (i > max){max = i} });

// The function for finding the lowest in the Array
var myArray = [12.5, 34.7, 82.1, 9.1, 22.8];
var max = 0;
var min = Infinity;

myArray.forEach(function(i) {if (min > i){min = i} });

// The function for finidng the number closest to zero
smallest([-12.5, -34.7, 82.1, 9.1, 22.8])
var min = Infinity;

function smallest(array) {
  array.forEach(function(i) {
    if (Math.abs(i) <= Math.abs(min)) {
      min = i;
    }
  })
  return min;
};

// Calculates the sum
var myArray = [12.5, 34.7, 82.1, 9.1, 22.8];
var min = Infinity;
var max = Infinity;
var sum = 0;

myArray.forEach(function(i) {
  sum += i;

});
  console.log(sum);

// Create a function that calculates and returns the sum of an array
var myArray = [12.5, 34.7, 82.1, 9.1, 22.8];


function sumOfAll(i) {
  var sum = 0;
  myArray.forEach(function(i) {
    sum += i;
  })
    return sum;
};
sumOfAll();

// Calculate the mean of the array
var myArray = [12.5, 34.7, 82.1, 9.1, 22.8];
var sum = 0;

function mean(i) {
  myArray.forEach(function(i) {
    sum += i;
  })
  return sum/myArray.length;
}
mean()

// Find the index of the highest number
var myArray = [12.5, 34.7, 82.1, 9.1, 22.8];
var max = myArray[0];
var maxIndex = 0;

for (var i = 1; i < myArray.length; i++) {
    if (myArray[i] > max) {
        maxIndex = i;
        max = myArray[i];
    }
};
