import { Customer } from "./Customer";

export class Discount{
    public giveDiscount(customer: Customer){
        return customer.giveDiscount();
    }
}