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
    enable: () => {};
    disable: () => {};
    addSubElement: (button: HTMLElement | Element) => {};
    addSubElements: (buttonList: HTMLElement[] | Element[]) => {};
    getComponentName: () => string;
    customLangUpdate: (api: API) => {};
    updateLang: (api: API) => {}; 
}