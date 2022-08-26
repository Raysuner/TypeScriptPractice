/**
 * @param Arr: Array
 * 获取数组最后一个元素
 */
type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]]
  ? First
  : never;

/**
 * @param Arr: Array
 * 获取数组最后一个元素
 */
type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last]
  ? Last
  : never;

/**
 * @param Arr: Array
 * 删除数组最后一个元素
 */
type PopArray<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [...infer Rest, unknown]
  ? Rest
  : never;
