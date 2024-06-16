import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class CurrentConditionsDisplay implements Observer {
  
    private temperature: number | undefined;
    private humidity: number | undefined;
    private pressure: number | undefined;

    constructor(private subject: Subject){
        this.subject.registerObserver(this);
    }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  public display() {
    console.log(
      `current weather forcast is: temperature:${this.temperature} humidity: ${this.humidity} pressure: ${this.pressure}`,
    );
  }
}
