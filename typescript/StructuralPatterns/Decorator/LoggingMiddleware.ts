import { ServerRequestDecorator } from "./ServerRequestDecorator";

export class LoggingMiddleware extends ServerRequestDecorator{
    public handle(req: any): void {
        console.log(`logging the request: ${req}`);
        this.request.handle(req)
    }

}