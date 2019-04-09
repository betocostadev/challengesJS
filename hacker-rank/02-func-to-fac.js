/* Task
Implement a function named factorial that has one parameter: an integer n, . It must return the value of n! (i.e., n factorial).

Constraints
1 <= n <= 10

If n == 4, then result is: 24.
Explanation: 4! = 4 x 3 x 2 x 1 = 24
 */

/* My attempt: */


function factorial(n) {
    let numbers = [n];
    while (n > 1) {
      numbers.unshift(n - 1);
    //   console.log(numbers);
      n--;
    }
    return numbers.reduce((a, b) => a * b);
}
console.log(`Using my version:`);
console.log(factorial(5));


// Function below based on Eloquent JavaScript Book, chapter 1.
function factorialElo (num) {
    if (num == 0) {
        return 1;
    } else {
    return factorialElo(num - 1) * num;
    }
}
console.log(`Using the Eloquent JS version:`);
console.log(factorialElo(5));