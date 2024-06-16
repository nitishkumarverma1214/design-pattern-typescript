import { PaymentProcessor } from "./PaymentProcessor";

export class MakePayment{
    constructor(private _paymentProcessor: PaymentProcessor){}

    public makePayment(){
        this._paymentProcessor.processPayment();
    }
}