// Different ways to count the number of the same element in the Array.
console.log(`=== Array Counting: Some different ways to find the number of the same elements in the Arrays. ===`)

console.log(`Counting with a for loop:`)

const arrayLoop = [ 1, 2, 8, 4, 7, 7, 9, 8, 19, 19, 19, 19, 3, 2, 8, 8, 8, 2, 1, 4, 5, 1, 6, 8, 8, 10, 8, 11, 13, 9, 8, 14]
console.log(arrayLoop.indexOf(2, 10))
console.log(arrayLoop.indexOf(2, 11))
console.log(arrayLoop.indexOf(2, 12))

const countWithFor = (arr, searchEl) => {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchEl) {
      count++
    }
  }
  return count
}
console.log(`Array:`, arrayLoop)
console.log(`The same Array is used for all the tests below:`)
console.log(`How many "8" inside it?`, countWithFor(arrayLoop, 8))

console.log(`
Counting with forEach:`)

const countWithForEach = (arr, searchEl) => {
  let count = 0
  arr.forEach(element => {
    if (element === searchEl) {
      count++
    }
  })
  return count
}
console.log(`How many "8" inside it?`, countWithFor(arrayLoop, 8))


console.log(`
Counting with filter:`)

const countWithFilter = (arr, searchEl) => {
  return arr.filter(element => element === searchEl).length
}

console.log(`How many "8" inside it?`, countWithFilter(arrayLoop, 8))

console.log(`
Counting using While, and indexOf. Moving the next index to start the search:`)

const countWithWhile = (arr, searchEl) => {
  let count = 0
  let ind;
  while ((ind = arr.indexOf(searchEl, ind)) !== -1) {
    ++count
    ++ind
  }
  return count
}
console.log(`How many "8" inside it?`, countWithWhile(arrayLoop, 8))

// Find and count elements in the array using recursion
console.log(`
Find and count elements in the array using recursion
`)
console.log(`Countdown function test: (5 to 0)`)
// Recursion, simple countdown function
const countdown = (num) => {
  if (num === 0) return // stop the recursion
  console.log(num)
  return countdown(num - 1) // Recursion
}

countdown(5)

let count = 0
let index = 0

const recursiveCount = (arr, el, ind, calls) => {
  calls++
  console.log(`Calls: `, calls)
  console.log('El \ ind', el, ind)
  console.log(`Element found in: `, arr.indexOf(el, ind))
  // Force only the first element before incrementing the index. To avoid not passing by the el 0.
  if (ind === 0 && arr.includes(el, ind)) {
    ++count
    ++ind
    return recursiveCount(arr, el, ind, calls)
  }
  // Keep searching from index 1
  ind++
  if (calls > 1 && !arr.includes(el, ind)) {
    return `Search complete, count is ${count}`
  }
  if (!arr.includes(el, ind)) {
    return `Element not present in the array`
  } else {
    if (calls >= arr.length) {
      return `Calls ended! Calls: ${calls}. Count: ${count}`
    }
    ++count
    console.log(`Count: ${count}`)
    ind = arr.indexOf(el, ind)
    return recursiveCount(arr, el, ind, calls)
  }
}

console.log(recursiveCount(arrayLoop, 19, 0, 0))
/* let periquito = 0
const countAgain = (num) => {
  if (num === 0) return
  periquito++
  console.log('Periquito', periquito)
  return countAgain(num - 1, periquito)
}

countAgain(4)


const arrayOne = [1, 2, 3, 3, 4, 5, 1, 7, 8, 4, 4, 2]

let count = 0
let calls = 0
const findInArr = (arr, element, index) => {
  calls++
  if (calls > arr.length) {
    return (`Ended calls`, calls)
  }
  if (!arr.includes(element)) {
    return `Element not found!`
  }
  if (index > 0) {
    count++
    return console.log('Grelos!', count, findInArr(arr, element, arr.indexOf(element) + 1))
  }
  count++
  return findInArr(arr, element, arr.indexOf(element) + 1)
}

// `Found in position ${arr.indexOf(element)}`
console.log(findInArr(arrayOne, 1, 0)) */