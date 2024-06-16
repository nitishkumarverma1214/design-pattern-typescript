import { Amplifier } from "./Amplifier";
import { DvdPlayer } from "./DvdPlayer";
import { HomeTheaterFacade } from "./HomeTheaterFacade"
import { Lights } from "./Lights";
import { Projector } from "./Projector";

export const facadeClient=()=>{

    const amplifier = new Amplifier();
    const dvdPlayer = new DvdPlayer();
    const projector =  new Projector();
    const lights = new Lights();
    const homeTheaterFacade = new HomeTheaterFacade(amplifier, dvdPlayer, projector,lights );
    homeTheaterFacade.watchMovie('Dark Rider')
}