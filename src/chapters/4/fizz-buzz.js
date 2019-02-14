const [FIZZ, BUZZ] = ['Fizz', 'Buzz']

export default function (start = 1, end = 100) {
  for (let i = start; i <= end; i += 1) {
    let output = ''
    if (i % 3 === 0) {
      output += FIZZ
    }
    if (i % 5 === 0) {
      output += BUZZ
    }
    console.log(output || i)
  }
}
