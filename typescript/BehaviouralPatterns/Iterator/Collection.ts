import { MyIterator } from "./MyIterator";

export interface Collection<T> {
  createIterator(): MyIterator<T>;
}
