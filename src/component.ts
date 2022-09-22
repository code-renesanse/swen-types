import { API } from "./api";

export interface Component {
    api: API;
    id: string;
    name: string; 
    // this.translation;
    subElements: HTMLElement;
    dockElement: HTMLElement;
    title: HTMLElement;
    dockItem: HTMLElement;
    enable: () => void;
    disable: () => void;
    addSubElement: (button: HTMLElement | Element) => void;
    addSubElements: (buttonList: HTMLElement[] | Element[]) => void;
    getComponentName: () => string;
    customLangUpdate: (api: API) => void;
    updateLang: (api: API) => void; 
}