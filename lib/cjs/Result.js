"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
const MolganError_1 = require("./MolganError");
class Result {
    constructor(isSuccess, error, value) {
        if (isSuccess && error) {
            throw new MolganError_1.MolganError(`InvalidOperation: A result cannot be 
        successful and contain an error`);
        }
        if (!isSuccess && !error) {
            throw new MolganError_1.MolganError(`InvalidOperation: A failing result 
        needs to contain an error message`);
        }
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        if (error) {
            this.error = error;
        }
        if (value) {
            this._value = value;
        }
        Object.freeze(this);
    }
    getValue() {
        if (!this.isSuccess) {
            throw new MolganError_1.MolganError(`Cant retrieve the value from a failed result.`);
        }
        return this._value;
    }
    static ok(value) {
        return new Result(true, undefined, value);
    }
    static fail(error) {
        return new Result(false, new MolganError_1.MolganError(error));
    }
}
exports.Result = Result;
//# sourceMappingURL=Result.js.map