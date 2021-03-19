/* ************************************************************
The first section calculates the average of the numbers
The second section has a function to calculate the average
Both should work correctly
Fix all issues an apply the suggested best practices to the code
************************************************************ */


// ---------------------- SECTION 1 ---------------------------

var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],    // changed to array variable using brackets, renamed
    sum = 0,  // initial variable to hold sum of all numbers
    avg = 0,
    i;

// Calculate sum
for (i = 0; i<values.length; i++){   // for each position in value array
    sum += values[i]; // Add each value to the sum
}

// Calculate average
avg = sum/values.length;

// Print Results
console.log("\n")
console.log("Section 1")
console.log("Values: " +values);
console.log("Sum = " +sum);
console.log("Average = " +avg);
console.log("\n")



/* ---------------------- SECTION 2 -------------------------- */

var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];    // list of values

// Function for calculating average given the sum and value count
function average(values){
    
    // initialize variables
    var sum = 0, 
        avg = 0,
        i;  
    
    // Calculate sum
    for (i = 0; i<values.length; i++){   // for each position in value array
        sum += values[i]; // Add each value to the sum
    }

    // Calculate average
    avg = sum/values.length;

    // Print Results
    console.log("\n");
    console.log("Section 2");
    console.log("Values: " +values);
    console.log("Sum = " +sum);
    console.log("Average = " +avg);
    console.log("\n");
}

average(values);