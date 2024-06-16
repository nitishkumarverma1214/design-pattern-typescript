import { AuthMiddleware } from "./AuthMiddleware";
import { BaseServer } from "./BaseServer";
import { LoggingMiddleware } from "./LoggingMiddleware";

export function decoratorPattern(){
    let request = new BaseServer();
    request = new LoggingMiddleware(request);
    request.handle('Fetch the users');

    let authRequest = new BaseServer();
    authRequest = new AuthMiddleware(authRequest);
    authRequest.handle('Fetch the company')
   

}