/* *****************************************************************************************
Grade Program
In a JavaScript program add thirteen different values between 0 and 100.
Calculate the average and programmatically assign a letter grade A, B, C, D, F.
The ranges are:
90 to 100 = A,
80 to 89 = B,
70 to 79 = C,
60 to 69 = D,
below 60 = F.
***************************************************************************************** */

let valueList = [90, 85, 70, 98, 100, 81, 93, 96, 87, 73, 64, 91, 87]
let totalNumOfValues = valueList.length;
let sumOfValues = 0;
let pointsPossible = 100 * totalNumOfValues;

console.log("Gradebook Log: " + valueList);
console.log("Number of grades recorded: " + totalNumOfValues);

for (var i = 0; i < totalNumOfValues; i++){
  sumOfValues += valueList[i]; 
}

console.log("Total points earned: " + sumOfValues);
console.log("Total points possible: " + pointsPossible);

var average = sumOfValues / totalNumOfValues;

if (average >= 90) {
  console.log("Letter Grade: A")
}
else if(average >= 80 && average <= 89){
  console.log("Letter Grade: B")
}
else if(average >= 70 && average <= 79){
  console.log("Letter Grade: C")
}
else if(average >= 60 && average <= 69){
  console.log("Letter Grade: D")
}
else {
  console.log("Letter Grade: F")
};
