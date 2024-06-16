import { Collection } from "./Collection";
import { MyIterator } from "./MyIterator";
import { User } from "./User";
import { UserIterator } from "./UserIterator";

export class UserCollection implements Collection<User> {
  constructor(private users: User[]) {}
  public createIterator(): MyIterator<User> {
    return new UserIterator(this);
  }

  public getItems(): User[] {
    return this.users;
  }
}
