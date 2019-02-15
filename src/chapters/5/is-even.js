export default function isEven (n) {
  if ([0, 1].includes(n)) return n === 0
  if (n < 0) return isEven(-n)
  return isEven(n - 2)
}
