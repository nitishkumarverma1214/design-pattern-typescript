import { ServerRequestDecorator } from "./ServerRequestDecorator";

export class AuthMiddleware extends ServerRequestDecorator{
    public handle(req: any): void {
        console.log(`Autherization the request: ${req}`);
        this.request.handle(req)
    }

}