import { PaymentProcessor } from "./PaymentProcessor";

export class CreditCardPayment implements PaymentProcessor{
    processPayment(): void {
        console.log('Payment processed using credit card');
    }

}