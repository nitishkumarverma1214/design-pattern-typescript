export class Amplifier {
  public turnOn(): void {
    console.log("Turn on the Amplifier");
  }

  setVolume(level: number): void {
    console.log(`Set the volume to ${level}`);
  }
}
