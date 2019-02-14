export default function (start, end) {
  if (!Number(start + end) || start > end) {
    return
  }
  let array = []
  while (start <= end) {
    array.push(start++) // --- start += 1
  }
  return array
}
