import { API } from "./api.model";

export interface ConfigurationComponentMap {
    [key: string]: (parent: Component, api: API) => void;
} 

export interface Component {
    api: API;
    id: string;
    name: string; 
    // this.translation;
    subelements: HTMLElement;
    dockElement: HTMLElement;
    title: HTMLElement;
    dockItem: HTMLElement;
    configurationComponentsMap: ConfigurationComponentMap;
    enable: () => void;
    disable: () => void;
    addSubElement: (button: HTMLElement | Element) => void;
    addSubElements: (buttonList: HTMLElement[] | Element[]) => void;
    getComponentName: () => string;
    customLangUpdate: (api: API) => void;
    updateLang: (api: API) => void; 
}