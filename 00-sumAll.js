/* Numbers sum
Sum all the numbers up to the last, starting at 1 and ending at the last number */

function sumNum (num) {
    let total = 0, count = 1;
    while (count <= num) {
        total += count;
        count += 1;
    }
    console.log(total);
}

console.log('First test, number 10: ');
console.log(`Total is ${sumNum(10)}`);
console.log('First test, number 20: ');
console.log(`Total is ${sumNum(12)}`);