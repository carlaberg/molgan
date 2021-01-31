import { Result } from './Result'

export interface Command {
  name: string;
  commandString: string;
  callback: Function;
}

export class CommandHandler {
  _commands: { [commandString: string]: Command } = {};

  constructor() {
    this.add = this.add.bind(this);
  }

  get commands() {
    return this._commands;
  }

  add(command: Command):void {
    this._commands[command.commandString] = command;
  }

  process(resultString: string): Result<Command> {
    if (!this.isMatch(resultString)) {
      return Result.fail<Command>('The result string does not match any commands');
    }

    const match = this._commands[resultString];
    match.callback();

    return Result.ok<Command>(match);
  }

  private isMatch(resultString: string): boolean {
    return !!this._commands[resultString];
  }
}