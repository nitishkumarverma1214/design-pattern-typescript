import { ServerRequest } from "./ServerRequest";

export class BaseServer implements ServerRequest{
    handle(req: any): void {
        console.log(`base server handling the request ${req}`);
    }

}