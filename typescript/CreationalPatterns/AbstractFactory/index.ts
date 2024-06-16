import { GUIFactory } from "./GUIFactory"
import { MacOSFactory } from "./MacOSFactory";
import { WindowFactory } from "./WindowsFactory"

export const abstractFactoryApp = ()=>{

    renderUI(new WindowFactory());
    renderUI(new MacOSFactory());

}


const renderUI = (factory: GUIFactory)=>{
    const button = factory.createButton();
    const checkbox = factory.createCheckbox(button);

    button.render();
    button.onClick(()=> console.log('clicking button'));


    checkbox.render();
    checkbox.toggle();
}