"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MolganError = void 0;
class MolganError extends Error {
    constructor(...params) {
        super(...params);
        this.name = 'MolganError';
        this.type = 'error';
        this.date = new Date();
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, MolganError);
        }
    }
}
exports.MolganError = MolganError;
//# sourceMappingURL=MolganError.js.map