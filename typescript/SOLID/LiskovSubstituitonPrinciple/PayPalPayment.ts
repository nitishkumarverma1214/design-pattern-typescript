import { PaymentProcessor } from "./PaymentProcessor";

export class PayPalPayment implements PaymentProcessor{
    processPayment(): void {
        console.log('Payment processed using paypal');
    }

}