import { Customer } from "./Customer";

export class RegularCustomer implements Customer{
    giveDiscount(): number {
        return 10;
    }

}