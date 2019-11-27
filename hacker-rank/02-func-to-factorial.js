/* Task
Implement a function named factorial that has one parameter: an integer n, . It must return the value of n! (i.e., n factorial).

Constraints
1 <= n <= 10

If n == 4, then result is: 24.
Explanation: 4! = 4 x 3 x 2 x 1 = 24
 */

/* My attempt: */
// Alta performance
function fatorial(numero) {
  let resultado = 1;
  // Ou apenas inicie o i = 2, nem precisa do if.
  if (numero < 2) return resultado;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}
console.log('V1 - for loop: ', fatorial(5))

// Versão mais lenta devido a colocar dentro de arrays e por fim rodar o reduce.
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
// Apesar de ser recursiva, a performance ainda é melhor que a versão acima.
function factorialElo (num) {
    if (num == 0) {
        return 1;
    } else {
    return factorialElo(num - 1) * num;
    }
}
console.log(`Using the Eloquent JS version:`);
console.log(factorialElo(5));

// Sum and reduce 1
function factorialNew (n) {
  if (n <=1 ) {
    return 1;
  }
  return n* factorialNew(n-1);
}
console.log('Using another simple and effective version: ')
console.log(factorialNew(5));