declare global {
    interface Window {
        webkitSpeechRecognition: any;
    }
}
export declare class Molgan {
    private static instance;
    private isRecognitionActive;
    recognition: any;
    synthesis: any;
    private _events;
    private _commandHandler;
    constructor();
    static getInstance(): Molgan;
    init: () => void;
    private addEventListeners;
    private onResult;
    private handleError;
    speak: (phrase: string) => void;
    get on(): (eventName: string, callback: (e?: any) => void) => void;
    get addCommands(): (command: import("./CommandHandler").Command) => void;
    get getCommands(): {
        [commandString: string]: import("./CommandHandler").Command;
    };
}
