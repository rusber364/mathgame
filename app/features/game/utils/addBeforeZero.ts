export function addBeforeZero(num: number) {
  num = Math.round(num)
  return num > 9 ? `${num}` : `0${num}`
}
