export interface SwrInfo<T> {
  data?: T,
  error?: any,
  isValidating?: boolean,
  mutate: (data?: any, shouldRevalidate?: boolean) => Promise<any>,
}

export default SwrInfo;
