import { Customer } from "./Customer";

export class PremiumCustomer implements Customer {
    giveDiscount(): number {
        return 20;
    }

}