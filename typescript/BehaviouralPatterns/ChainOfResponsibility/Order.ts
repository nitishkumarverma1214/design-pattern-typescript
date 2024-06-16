export class Order {
  public isValid(): boolean {
    return true;
  }

  public applyDiscount(): void  {
    console.log( `applying a discount of 10%`);
  }

  public processPayment(): boolean {
    // allow to process payment
    return true;
  }

  public ship(): void{
    console.log(`shipping the order`);
  }
}
