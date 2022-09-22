import { Dictionary } from "../dictionary";
import { ModelElement } from "../element";

export interface API {
    imageDictionary: Dictionary<string>;
    componentDictionary: Dictionary<ModelElement>;
    modelsList: string[];
    animationSpeed: number;
    show: (id: string) => {};
    hide: (id: string) => {};
}