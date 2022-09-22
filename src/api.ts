import { Component } from "./component";
import { Dictionary } from "./dictionary";
import { ModelElement } from "./element";
import { Language, Translation } from "./language";

export interface API {
    imageDictionary: Dictionary<string>;
    componentDictionary: Dictionary<ModelElement>;
    modelsList: string[];
    animationSpeed: number;
    languages: Language;
    TRANSLATOR: Translation;
    COMPONENTS: Component[];
    show: (id: string) => {};
    hide: (id: string) => {};
}
