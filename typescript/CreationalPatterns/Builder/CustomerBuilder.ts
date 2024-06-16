import { Customer } from "./Customer";
import { ICustomer } from "./ICustomer";
import { ICustomerBuilder } from "./ICustomerBuilder";

export class CustomerBuilder implements ICustomerBuilder {
  private _firstName!: string;
  private _lastName!: string;
  private _email!: string;
  private _phoneNumber!: string;

  public setFirstName(firstName: string): ICustomerBuilder {
    this._firstName = firstName;
    return this;
  }
  public setLastName(lastName: string): ICustomerBuilder {
    this._lastName = lastName;
    return this;
  }
  public setEmail(email: string): ICustomerBuilder {
    this._email = email;
    return this;
  }
  public setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this._phoneNumber = phoneNumber;
    return this;
  }
  public build(): ICustomer {
    return new Customer(
      this._firstName,
      this._lastName,
      this._email,
      this._phoneNumber,
    );
  }
}
