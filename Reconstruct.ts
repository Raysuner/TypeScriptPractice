/**
 * @param Arr: Array
 * @param Ele: Element
 */
type Push<Arr extends unknown[], Ele> = [...Arr, Ele];

/**
 * @param Arr: Array
 */
type unShift<Arr extends unknown[], Ele> = [Ele, ...Arr];

/**
 * @param One: Array
 * @param Two: Array
 */
type Chunk<One extends unknown[], Two extends unknown[]> = One extends [
  infer FirstOne,
  ...infer RestOne
]
  ? Two extends [infer FirstTwo, ...infer RestTwo]
    ? [[FirstOne, FirstTwo], ...Chunk<RestOne, RestTwo>]
    : []
  : [];

/**
 * @param Str: string
 * 首写字母大写
 */
type CapitalizeStr<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : Str;

/**
 * @param Str: string
 * @param Flag: string
 * 去除Str中的Flag
 */
type CamelCase<
  Str extends string,
  Flag extends string
> = Str extends `${infer Prefix}${Flag}${infer Suffix}`
  ? `${Prefix}${CamelCase<Suffix, Flag>}`
  : Str;

/**
 * @param Str: string
 * @param SubStr: string
 * 去除Str中的SubStr
 */
type DopSubStr<
  Str extends string,
  SubStr extends string
> = Str extends `${infer Prefix}${SubStr}${infer Suffix}`
  ? `${Prefix}${DopSubStr<Suffix, SubStr>}`
  : Str;

/**
 * @param Func: Function
 * @param ArgList: unknown[]
 * 往函数参数列表中添加参数
 */
type AppendArguments<
  Func extends Function,
  ArgList extends unknown[]
> = Func extends (...args: infer Args) => infer R
  ? (...args: [...Args, ...ArgList]) => R
  : Func;

/**
 * @param Obj: Object
 * 将key转为大写
 */
type UppercaseKey<Obj extends Record<string, any>> = {
  [K in keyof Obj as K extends string ? Uppercase<K> : K]: Obj[K];
};

// 写法二
type UppercaseKey2<Obj extends Record<string, any>> = {
  [K in keyof Obj as Uppercase<K & string>]: Obj[K];
};

/**
 * @param Obj: object
 * @param FilterKeys: Union
 * 根据值类型进行过滤
 */
type FilterByValueType<Obj extends Record<string, any>, FilterKeys> = {
  [K in keyof Obj as Obj[K] extends FilterKeys ? K : never]: Obj[K];
};
