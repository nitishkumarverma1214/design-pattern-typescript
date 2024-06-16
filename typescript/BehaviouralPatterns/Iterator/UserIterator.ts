import { MyIterator } from "./MyIterator";
import { MyIteratorResult } from "./MyIteratorResult";
import { User } from "./User";
import { UserCollection } from "./UserCollection";

export class UserIterator implements MyIterator<User> {
  private position: number = 0;
  constructor(private collection: UserCollection) {}

  public next(): MyIteratorResult<User> {
    if (this.hasNext()) {
      return {
        value: this.collection.getItems()[this.position++],
        done: false,
      };
    } else {
      return {
        value: null,
        done: true,
      };
    }
  }

  public hasNext(): boolean {
    return this.position < this.collection.getItems().length;
  }
}
