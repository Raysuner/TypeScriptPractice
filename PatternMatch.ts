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

/**
 * @param Arr: Array
 * 删除数组第一个元素
 */
type ShiftArray<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [unknown, ...infer Rest]
  ? Rest
  : never;

/**
 * @param Str: string
 * @param Prefix: string
 * 以Prefix开头的字符串
 */
type StartWith<
  Str extends string,
  Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false;

/**
 * @param Str: string
 * @param From: string
 * @param To: string
 */
type Replace<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}`
  : Str;

/**
 * @param Str: string
 * 去除字符串前后的空格
 */
type TrimLeft<Str extends string> = Str extends `${
  | " "
  | "\n"}${infer RightRest}`
  ? TrimLeft<RightRest>
  : Str;

type TrimRight<Str extends string> = Str extends `${infer LeftRest}${
  | " "
  | "\n"}`
  ? TrimRight<LeftRest>
  : Str;

type Trim<Str extends string> = TrimRight<TrimLeft<Str>>;

/**
 * @param Func: Function
 * 获取函数参数
 */
type GetParammeters<Func extends Function> = Func extends (
  ...args: infer P
) => any
  ? P
  : never;

/**
 * @param Func: Function
 * 获取函数参数
 */
type GetReturnType<Func extends Function> = Func extends (
  ...args: any[]
) => infer R
  ? R
  : any;

/**
 * @param Func: Function
 * 获取this参数类型
 */
type GetThisParamsmeterType<Func extends Function> = Func extends (
  this: infer This,
  ...args: any[]
) => any
  ? This
  : never;

/**
 * @param Func: Function
 * 获取实例类型
 */
type GetInstanceType<Func extends Function> = Func extends new (
  ...args: any[]
) => infer R
  ? R
  : any;

/**
 * @param Func: Function
 * 获取构造函数参数类型
 */
type GetConstrutorParamsmeter<Func extends Function> = Func extends new (
  args: infer Args
) => any
  ? Args
  : never;
