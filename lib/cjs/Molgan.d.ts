export declare class Molgan {
    recognition: any;
    synthesis: any;
    private _events;
    private _commandHandler;
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
