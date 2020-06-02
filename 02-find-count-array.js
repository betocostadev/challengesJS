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

console.log(`
Counting using Reduce:`)

const countWithReduce = (arr, searchEl) => {
  return arr.reduce((acc, cur) => (cur === searchEl ? acc + 1 : acc), 0)
}
console.log(`How many "8" inside it?`, countWithReduce(arrayLoop, 8))

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

// console.log(recursiveCount(arrayLoop, 19, 0, 0))

console.log(`The array to find the items: `, arrayLoop)
const recursiveCount = (arr, searchEl) => {
  // Copy the array to avoid mutation the original array.
  let arrayCopy = arr.filter(element => element)
  // The recursive function
  const countElements = (copy, item) => {
    if (copy.length === 1) {
      return copy[0] === item ? true : false
    } else {
      return (copy.shift() === item ? true : false) + countElements(copy, item)
    }
  }
  return countElements(arrayCopy, searchEl)
}

console.log(`Recursive count total: `, recursiveCount(arrayLoop, 8))
