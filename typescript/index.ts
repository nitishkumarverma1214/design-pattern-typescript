// import { CustomerBuilder, CustomerDirector } from "./CreationalPatterns/Builder";



// const builder1 = new CustomerBuilder();
// const customerDirector = new CustomerDirector(builder1)
// const customer = customerDirector.buildMinimal("Nitish", "Verma", "nkv@gmail.com");

// console.log(customer)
import { abstractFactoryApp } from "./CreationalPatterns/AbstractFactory";
import { factoryApp } from "./CreationalPatterns/Factory";
import { facadeClient } from "./StructuralPatterns/Facade";
import { bridgePattern } from "./StructuralPatterns/Bridge";
import { compositePattern } from "./StructuralPatterns/Composite";
import { decoratorPattern } from "./StructuralPatterns/Decorator";
import { adapterPattern } from "./StructuralPatterns/Adapter";
import { observerPattern } from "./BehaviouralPatterns/Observer";
import { iteratorPattern } from "./BehaviouralPatterns/Iterator";
import { strategyPattern } from "./BehaviouralPatterns/Strategy";
import { templatePattern } from "./BehaviouralPatterns/Template";
import { commandPattern } from "./BehaviouralPatterns/Command/Example1";
import { FileSystemCommandPattern } from "./BehaviouralPatterns/Command/Example2";
import { statePattern } from "./BehaviouralPatterns/State";
import { chainOfRespPattern } from "./BehaviouralPatterns/ChainOfResponsibility";

// factoryApp();

// abstractFactoryApp();

// facadeClient();

// bridgePattern();

// compositePattern();

// decoratorPattern();

// adapterPattern();

// observerPattern();

// iteratorPattern();

// strategyPattern();

// templatePattern();

// commandPattern();

// FileSystemCommandPattern();

// statePattern();

chainOfRespPattern();