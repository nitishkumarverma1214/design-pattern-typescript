import { PaymentProcessorFactory } from "./PaymentProcessorFactory";

export const factoryApp = ()=>{
    const paymentProcessor = new PaymentProcessorFactory().createProcessor('paypal', 600);
    paymentProcessor.processPayment();
}