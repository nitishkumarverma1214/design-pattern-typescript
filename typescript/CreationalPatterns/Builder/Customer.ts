import { ICustomer } from "./ICustomer";

export class Customer implements ICustomer{
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
  ) {}
}
