import { Events } from './Events';
export declare class Molgan {
    recognition: any;
    events: Events;
    init: () => void;
    private addEventListeners;
    private onResult;
    private handleError;
}
