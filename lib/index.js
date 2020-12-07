(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Molgan"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Molgan = void 0;
    const Molgan_1 = require("./Molgan");
    Object.defineProperty(exports, "Molgan", { enumerable: true, get: function () { return Molgan_1.Molgan; } });
});
//# sourceMappingURL=index.js.map