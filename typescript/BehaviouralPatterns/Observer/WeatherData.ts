import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number | undefined;
  private pressure: number | undefined;
  private humidity: number | undefined;

  public registerObserver(observer: Observer): void {
    const isExsits = this.observers.includes(observer);
    if (isExsits) {
      return console.log("Observer already exsits...");
    }
    this.observers.push(observer);
    console.log("observer added...");
  }
  public removeObserver(observer: Observer): void {
    const observerIdx = this.observers.indexOf(observer);
    if (observerIdx === -1) {
      return console.log("Observer does not exists");
    }
    this.observers.splice(observerIdx, 1);
    console.log("observer removed...");
  }
  public notifyObservers(): void {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      for(let observer of this.observers){
        observer.update(this.temperature, this.humidity, this.pressure);
      }
    }
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number,
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }
}
