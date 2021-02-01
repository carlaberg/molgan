"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Molgan_1 = require("./Molgan");
const molgan = new Molgan_1.Molgan();
molgan.init();
molgan.addCommands({
    name: 'add',
    commandString: 'bulle',
    callback: () => {
        console.log('callbacken');
        molgan.speak('banan');
    }
});
molgan.on('ON_RECOGNITION', (e) => {
    console.log(e);
});
//# sourceMappingURL=example.js.map