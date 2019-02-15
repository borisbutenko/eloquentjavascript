export default function countChars (string, char, allLowerCase = false) {
  let counted = 0

  if (allLowerCase) {
    string = string.toLowerCase()
    char = char.toLowerCase()
  }

  for (let i = 0, l = string.length; i < l; i += 1) {
    if (string[i] === char) {
      counted += 1
    }
  }

  return counted
}

export function countBs (string) {
  return countChars(string, 'B')
}
