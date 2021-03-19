/* 
Revised Grade program –In a JavaScript program create 5 students
with five sets of 13 grades each with different values between 0 and 100.
Calculate the average and programmatically assign a letter grade A, B, C, D, F.
The ranges are
90 to 100 = A
80 to 89 = B
70 to 79 = C
60 to 69 = D
below 60 = F.
Write the results to the console log.
Suggestions: Use arrays for the values and functions to simplify the calculations.

Math.random() resource: https://www.w3schools.com/js/js_random.asp
*/

// Student Report Object - prints report
function studentReport(studentName, gradeLog) {
    
    var name = studentName;
    var gradeList = gradeLog;
    var numberOfGradesLogged = gradeList.length;    
    
    // Calculate total points earned
    var pointsEarned = function() {
        var sumOfValues = 0;
        for (var i = 0; i < numberOfGradesLogged; i++){
        sumOfValues += gradeList[i];
        }
        return sumOfValues;
    }    
    
    // Total points possible
    var pointsPossible = 100 * numberOfGradesLogged;    
    
    // Calculate Average
    var gradeAverage = Math.round(pointsEarned() / numberOfGradesLogged);

    // Assign Letter Grade
    if (gradeAverage > 90) {
        var letterGrade = "A";       
    }
    else if(gradeAverage >= 80 && gradeAverage <= 89){
        var letterGrade = "B";        
    }
    else if(gradeAverage >= 70 && gradeAverage <= 79){
        var letterGrade = "C";        
    }
    else if(gradeAverage >= 60 && gradeAverage <= 69){
        var letterGrade = "D";        
    }
    else {
        var letterGrade = "F";        
    };

    this.printReport = function() {
        console.log("\n");
        console.log("Name: " + name);
        console.log("Gradebook Log: " + gradeList);
        console.log("Number of grades recorded: " + numberOfGradesLogged);
        console.log("Total Points Earned: " + pointsEarned());
        console.log("Total Points Possible: " + pointsPossible);
        console.log("Final Grade: " + gradeAverage);
        console.log("Letter Grade: " + letterGrade);

    }
}


function randomGradeBook(numberOfGrades) {
    var gradeValues = [];
    for (var i = 0; i < numberOfGrades; i++){
        // return random number between 60 and 100
        gradeValues[i] = Math.floor(Math.random()*(100 - 60 + 1)) + 50;
    }
    return gradeValues;
}


var student1 = new studentReport('Dani', randomGradeBook(13));
var student2 = new studentReport('Josh', randomGradeBook(13));
var student3 = new studentReport('Eloise', randomGradeBook(13));
var student4 = new studentReport('Hope', randomGradeBook(13));
var student5 = new studentReport('Dino', randomGradeBook(13));

student1.printReport();
student2.printReport();
student3.printReport();
student4.printReport();
student5.printReport();