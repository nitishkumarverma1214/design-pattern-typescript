import { MyIteratorResult } from "./MyIteratorResult";

export interface MyIterator<T> {
  next(): MyIteratorResult<T>;
  hasNext(): boolean;
}
