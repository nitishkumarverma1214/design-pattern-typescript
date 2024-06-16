import { Amplifier } from "./Amplifier";
import { DvdPlayer } from "./DvdPlayer";
import { Lights } from "./Lights";
import { Projector } from "./Projector";

export class HomeTheaterFacade {
  constructor(
    private _amplifier: Amplifier,
    private _dvdPlayer: DvdPlayer,
    private _projector: Projector,
    private _lights: Lights,
  ) {}

  watchMovie(movie: string){
    this._dvdPlayer.turnOn()
    this._dvdPlayer.playMovie(movie);
    this._amplifier.turnOn();
    this._amplifier.setVolume(7);
    this._projector.turnOn();
    this._projector.setInput(this._dvdPlayer);
    this._lights.dim(2);
  }
}
