import { PaymentProcessor } from "./PaymentProcessor";

export class StripeProcessor extends PaymentProcessor{
    public processPayment(): void {
        console.log(`Processing payment using stripe`)
    }

}