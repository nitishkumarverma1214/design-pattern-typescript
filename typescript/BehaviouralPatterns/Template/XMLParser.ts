import { DataParser } from "./DataParser";

export class XMLParser extends DataParser{
    protected parse(data: string) {
       console.log(`parsing the XML data ${data}`);
       return data;
    }

}