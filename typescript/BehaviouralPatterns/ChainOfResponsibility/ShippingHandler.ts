import { Order } from "./Order";
import { AbstractHandler } from "./AbstractHandler";


export class ShippingHandler extends AbstractHandler {
  public handle(order: Order): string | null {
    order.ship();
    console.log('order is shipped')
    super.handle(order);
    return null;
  }
}
