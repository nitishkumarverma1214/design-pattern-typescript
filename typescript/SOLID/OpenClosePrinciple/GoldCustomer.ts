import { Customer } from "./Customer";

export class GoldCustomer implements Customer {
    giveDiscount(): number {
        return 40;
    }

}