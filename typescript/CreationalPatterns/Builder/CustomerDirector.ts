import { ICustomer } from "./ICustomer";
import { ICustomerBuilder } from "./ICustomerBuilder";

export class CustomerDirector {
  constructor(private _builder: ICustomerBuilder) {}
  public buildMinimal(
    firstName: string,
    lastName: string,
    email: string,
  ): ICustomer {
    return this._builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .build();
  }
}
