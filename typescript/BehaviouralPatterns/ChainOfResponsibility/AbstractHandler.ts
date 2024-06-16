import { Handler } from "./Handler";
import { Order } from "./Order";

export class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(order: Order): string | null {
    if (this.nextHandler) {
      return this.nextHandler?.handle(order);
    }
    return null;
  }
}
