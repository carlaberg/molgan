"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandler = void 0;
const Result_1 = require("./Result");
class CommandHandler {
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
            return Result_1.Result.fail('The result string does not match any commands');
        }
        const match = this._commands[resultString];
        match.callback();
        return Result_1.Result.ok(match);
    }
    isMatch(resultString) {
        return !!this._commands[resultString];
    }
}
exports.CommandHandler = CommandHandler;
//# sourceMappingURL=CommandHandler.js.map