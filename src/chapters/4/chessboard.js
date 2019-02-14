const DEFAULT_MARKUP = 8

export default function (markup = DEFAULT_MARKUP) {
  let [firstCell, secondSell] = [' #', '# ']
  let [cellCount, board] = [(markup / 2), '']
  while (markup--) {
    board += ((markup % 2 === 0) ? firstCell : secondSell).repeat(cellCount)
    board += '\n'
  }
  console.log(board)

  /*
    --- Default solution
    let size = 8
    let board = ''
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if ((x + y) % 2 === 0) {
          board += ' '
        } else {
          board += '#'
        }
      }
      board += '\n'
    }
    console.log(board)
  */
}
