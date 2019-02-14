export default function (numbers) {
  if (!Array.isArray(numbers)) {
    numbers = [...arguments]
  }
  return numbers.reduce((sum, number) => {
    number = Number(number)
    if (typeof number === 'number') {
      return sum + number
    }
    return sum
  }, 0)
}
