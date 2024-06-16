import { AbstractHandler } from "./AbstractHandler";
import { Order } from "./Order";

export class ValidationHandler extends AbstractHandler{

    public handle(order: Order): string | null {
        if(order.isValid()){
            console.log('order is valid');
            super.handle(order);
        }
        return "validation failed";
    }
}