import { PaymentProcessor } from "./PaymentProcessor";

export class BankTransferProcessor extends PaymentProcessor{
    public processPayment(): void {
        console.log(`Processing payment via Bank Transfer`)
    }

}