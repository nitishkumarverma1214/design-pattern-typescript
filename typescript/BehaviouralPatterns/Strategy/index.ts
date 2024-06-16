import { GrayscaleStrategy } from "./GrayscaleStrategy";
import { ImageProcessor } from "./ImageProcessor";
import { NegativeStrategy } from "./NegativeStrategy";
import { SepiaStrategy } from "./SepiaStrategy";

export const strategyPattern = ()=>{
    const image = 'Peacock image';
    const imageProcessor = new ImageProcessor(new NegativeStrategy());
    imageProcessor.applyFilter(image);

    imageProcessor.setFilterStrategy(new GrayscaleStrategy());
    imageProcessor.applyFilter(image);
    imageProcessor.setFilterStrategy(new SepiaStrategy());
    imageProcessor.applyFilter(image);
}