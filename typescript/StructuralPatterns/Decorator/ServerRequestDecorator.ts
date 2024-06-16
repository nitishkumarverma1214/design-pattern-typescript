import { BaseServer } from "./BaseServer";
import { ServerRequest } from "./ServerRequest";

export abstract class ServerRequestDecorator implements BaseServer{
    constructor(protected request: ServerRequest){}
    public abstract handle(req: any): void; 
}