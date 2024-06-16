export class DvdPlayer {
  public turnOn(): void {
    console.log("Turn on the DVD player");
  }

  public playMovie(movie: string): void {
    console.log(`Play the ${movie}`);
  }
}
