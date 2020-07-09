interface IPosts {
  userId: number
  id: number,
  title: string
  body: string
}

interface IPayload<T> {
  result: T
  params: undefined
}