import { Result } from './Result';
export class CommandHandler {
    constructor() {
        this._commands = {};
        this.add = this.add.bind(this);
    }
    get commands() {
        return this._commands;
    }
    add(command) {
        this._commands[command.commandString] = command;
    }
    process(resultString) {
        if (!this.isMatch(resultString)) {
            return Result.fail('The result string does not match any commands');
        }
        const match = this._commands[resultString];
        match.callback();
        return Result.ok(match);
    }
    isMatch(resultString) {
        return !!this._commands[resultString];
    }
}
//# sourceMappingURL=CommandHandler.js.map