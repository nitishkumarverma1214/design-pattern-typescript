import { DiscountHandler } from "./DiscountHandler";
import { Order } from "./Order";
import { PaymentHandler } from "./PaymentHandler";
import { ShippingHandler } from "./ShippingHandler";
import { ValidationHandler } from "./ValdationHandler";

export function chainOfRespPattern(){

    const order = new Order();

    const handler = new ValidationHandler();
    handler.setNext(new DiscountHandler()).setNext(new PaymentHandler()).setNext(new ShippingHandler());
    handler.handle(order);
}