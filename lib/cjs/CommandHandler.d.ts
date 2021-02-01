import { Result } from './Result';
export interface Command {
    name: string;
    commandString: string;
    callback: Function;
}
export declare class CommandHandler {
    _commands: {
        [commandString: string]: Command;
    };
    constructor();
    get commands(): {
        [commandString: string]: Command;
    };
    add(command: Command): void;
    process(resultString: string): Result<Command>;
    private isMatch;
}
