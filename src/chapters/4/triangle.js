const DEFAULT_NUMBER_OF_CALLS = 7

export default function (numberOfCalls = DEFAULT_NUMBER_OF_CALLS) {
  /*
    --- First solution
    let line = ''
    let lattice = '#'
    do {
      let output = line += lattice
      console.log(output)
    }
    while (numberOfCalls--)
  */

  // --- Second solution
  let line = '#'
  while (line.length <= numberOfCalls) {
    console.log(line)
    line += '#'
  }

  /*
    --- Default solution
    for (let line = '#'; line.length <= numberOfCalls; line += '#') {
      console.log(line)
    }
  */
}
