export declare enum EventTypes {
    ON_RECOGNITION = "ON_RECOGNITION"
}
declare type EventCallback = (e?: any) => void;
export declare class Events {
    private events;
    on: (eventName: string, callback: EventCallback) => void;
    triggerEvent: (eventName: string, e: any) => void;
}
export {};
