import { PaymentProcessor } from "./PaymentProcessor";

export class DebitCardPayment implements PaymentProcessor{
    processPayment(): void {
        console.log('Payment processed using debit card');
    }

}