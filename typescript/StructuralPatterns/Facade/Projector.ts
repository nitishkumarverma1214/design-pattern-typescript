import { DvdPlayer } from "./DvdPlayer";

export class Projector {
  public turnOn(): void {
    console.log("Turn on the Projector");
  }

  setInput(dvdPlayer: DvdPlayer): void {
    console.log(`Set the input for Project`);
  }
}
