import { Component } from "./component.model";
import { Dictionary } from "./dictionary.model";
import { SketchfabModelElement } from "./element.model";
import { Language, Translation } from "./language.model";

export interface API {
    imageDictionary: Dictionary<string>;
    componentDictionary: Dictionary<SketchfabModelElement>;
    modelsList: string[];
    animationSpeed: number;
    languages: Language;
    TRANSLATOR: Translation;
    COMPONENTS: Component[];
    show: (id: string) => void;
    hide: (id: string) => void;
}