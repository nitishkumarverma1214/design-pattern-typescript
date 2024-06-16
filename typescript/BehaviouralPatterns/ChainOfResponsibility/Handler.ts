import { Order } from "./Order";

export interface Handler {
  setNext(handler: Handler): Handler;
  handle(order: Order): string | null;
}
