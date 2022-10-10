export function rangeLength(size: number) {
  return [...Array(size).keys()]
}

export function range(min: number, max: number) {
  const size = max - min + 1
  return rangeLength(size).map((value) => min + value)
}
