/* Objective
In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.
https://www.hackerrank.com/challenges/js10-let-and-const/problem
 */

const PI = Math.PI;
function areaAndPerCircle(r) {
    let area = PI * (r * r);
    let perimeter = 2 * PI * r;
    console.log(area);
    console.log(perimeter);
}
areaAndPerCircle(2.6);
