type DeepPromiseValueType<V> = V extends Promise<infer Value>
  ? DeepPromiseValueType<Value>
  : V;

type ReverseArray<Arr extends unknown[]> = Arr extends [
  infer First,
  ...infer Rest
]
  ? [...ReverseArray<Rest>, First]
  : [];

type IsEqual<A, B> = (A extends B ? true : false) &
  (B extends A ? true : false);

type Includes<Arr extends unknown[], Ele> = Arr extends [
  infer First,
  ...infer Rest
]
  ? IsEqual<First, Ele> extends true
    ? true
    : Includes<Rest, Ele>
  : false;

type RemoveItem<
  Arr extends unknown[],
  Ele,
  Result extends unknown[] = []
> = Arr extends [infer First, ...infer Rest]
  ? IsEqual<First, Ele> extends true
    ? RemoveItem<Rest, Ele, Result>
    : RemoveItem<Rest, Ele, [...Result, First]>
  : Result;

type ReplaceAll<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${ReplaceAll<Suffix, From, To>}`
  : Str;

type StringToUnion<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? First | StringToUnion<Rest>
    : never;

type ReverseStr<Str extends string> = Str extends `${infer First}${infer Rest}`
  ? `${ReverseStr<Rest>}${First}`
  : Str;

type DeepReadonly<Obj extends Record<string, any>> = Obj extends any
  ? {
      readonly [K in keyof Obj]: Obj[K] extends object
        ? DeepReadonly<Obj[K]>
        : Obj[K];
    }
  : never;

type T = DeepReadonly<{ a: { b: { c: number } } }>;
