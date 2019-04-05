/* Given some array of numbers, you have to find the missing number in the array. I.E.
array 1 = [ 2, 4, 5, 6, 7]
array 2 = [ 10, 11, 12, 14, 15]
Array 1 missing number = 3.
Array 2 missing number = 13 */
const arr1 = [ 2, 4, 5, 6, 7 ];
const arr2 = [ 10, 11, 12, 14, 15 ];
function findMissing(arr) {
    arr.sort();
    let sum = 0;
    let idx = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            idx = i;
        } else {
            sum += arr[i];
        }
    }
    // let missing = (sum / arr.length);
    // let missing = arr.length * (arr.length + 1) / 2;
    let missing = (sum + 1) / arr.length;
    console.log(`Missing number is: ${missing} and ${idx} and sum is ${sum}`);
    console.log(arr);
}

findMissing(arr2);