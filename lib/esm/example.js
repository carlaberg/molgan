import { Molgan } from './Molgan';
const molgan = new Molgan();
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