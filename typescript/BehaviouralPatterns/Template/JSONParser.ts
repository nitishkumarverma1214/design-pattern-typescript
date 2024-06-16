import { DataParser } from "./DataParser";

export class JSONParser extends DataParser{
    protected parse(data: string) {
       console.log(`parsing the JSON data ${data}`)
       return data;
    }

}