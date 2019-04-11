/* DAY 2 - IF ELSE STATEMENTS

Julia did an exam, display her grade based on the conditions below:

IF 25 < score <= 30, then grade = A
IF 20 < score <= 25, then grade = B
If 15 < score <= 20, then grade = C
If 10 < score <= 15, then grade = D
If 5 < score <= 10, then grade = E
If 0 < score <= 5, then grade = F

Input = score
Output = grade
Sample input = 11;
Sample output = D;
*/

// Julia score:
let score = 4;
function getGrade(score) {
    let grade;
    // Write your code here
    if (score >= 31) {
        grade = "Invalid";
    } else if (score > 24 && score <= 30) {
        grade = "A";
    } else if (score > 19 && score <= 25){
        grade = "B"
    } else if (score > 14 && score <= 20){
        grade = "C"
    } else if (score > 9 && score <= 15){
        grade = "D"
    } else if (score > 4 && score <= 10){
        grade = "E"
    } else {
        grade = "F";
    }
    return grade;
}

console.log(getGrade(score));