export type TOperator = '+' | '-' | '*' | '/'

export const operators: TOperator[] = ['+', '-', '*', '/']

export const maxRandomNumbersMap: Record<TOperator, number> = {
  '+': 100,
  '-': 100,
  '*': 10,
  '/': 5,
}
