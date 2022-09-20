import Dictionary from "../dictionary";
import ModelElement from "../element";

export default interface API {
    imageDictionary: Dictionary<string>;
    componentDictionary: Dictionary<ModelElement>;
    modelsList: string[];
    show: (id: string) => {};
    hide: (id: string) => {};
}