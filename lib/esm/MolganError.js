export class MolganError extends Error {
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
//# sourceMappingURL=MolganError.js.map