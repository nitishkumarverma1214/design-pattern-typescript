import { PaymentProcessor } from "./PaymentProcessor";

export class PaypalProcessor extends PaymentProcessor{
    public processPayment(): void {
        console.log(`Processing payment using paypal`)
    }

}