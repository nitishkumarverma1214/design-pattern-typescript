import { User } from "./User";
import { UserCollection } from "./UserCollection";

export const iteratorPattern = () => {
  const user1 = new User("James");
  const user2 = new User("Williams");
  const user3 = new User("Jhon");

  const userCollection = new UserCollection([user1, user2, user3]);

  const iterator = userCollection.createIterator();

  while (iterator.hasNext()) {
    console.log(iterator.next());
  }

  console.log(iterator.next());
};
