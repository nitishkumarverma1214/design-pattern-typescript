import { Order } from "./Order";
import { AbstractHandler } from "./AbstractHandler";

export class PaymentHandler extends AbstractHandler{

    public handle(order: Order): string | null {
        if(order.processPayment()){
            console.log('Payment is successfull');
            super.handle(order);
        }
        return "Payment failed";
    }
}