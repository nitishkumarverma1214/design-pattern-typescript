export abstract class PaymentProcessor {
  constructor(private amount: number) {}

  public abstract processPayment(): void;
}
