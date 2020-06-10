enum MaybeType {
  Just = 'maybe-type__just',
  Nothing = 'maybe-type__nothing',
}

interface Just<T> {
  type: typeof MaybeType.Just;
  value: T;
}

interface Nothing {
  type: typeof MaybeType.Nothing;
}

type Maybe<T>
  = Just<T>
  | Nothing

export { Maybe }
