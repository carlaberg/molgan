export declare enum EventTypes {
    ON_RECOGNITION = "ON_RECOGNITION"
}
declare type EventCallback = (e?: Event) => void;
export declare class Events {
    events: {
        [key: string]: EventCallback[];
    };
    on: (eventName: string, callback: EventCallback) => void;
    triggerEvent: (eventName: string, e: any) => void;
}
export {};
