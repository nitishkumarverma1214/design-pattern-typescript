import { BankTransferProcessor } from "./BankTransferProcessor";
import { PaymentProcessor } from "./PaymentProcessor";
import { PaypalProcessor } from "./PaypalProcessor";
import { StripeProcessor } from "./StripeProcessor";

export class PaymentProcessorFactory {

    public createProcessor(type: 'paypal' |'bankTransfer'|'stripe', amount: number): PaymentProcessor{

        switch(type){
            case 'paypal': 
                return new PaypalProcessor(amount);
            
            case 'bankTransfer': 
                return new BankTransferProcessor(amount);
            
            case 'stripe': 
                return new StripeProcessor(amount);
            
            default:
                throw new Error('Invalid type of processor')
        }
    }
}