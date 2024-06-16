import { JSONParser } from "./JSONParser";
import { XMLParser } from "./XMLParser";

export function templatePattern() {

   new JSONParser().parseData("{name: 'naruto'}");
   new XMLParser().parseData("<name>naruto</name>")
}