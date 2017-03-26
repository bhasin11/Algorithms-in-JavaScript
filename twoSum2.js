const twoSum = (numbers, target) => {
  let table = new Map()
  for (let i = 0; i < numbers.length; i++){
    if (table.has(numbers[i])) {
      return [table.get(numbers[i]) + 1, i + 1]
    }
    table.set((target - numbers[i]), i)
  }
  return 'Not Found'
}

const numbers = [2,3,4]
console.log(twoSum(numbers, 6))
