// import scripts
import { Molgan } from './Molgan';

// run scripts
const molgan = new Molgan();
molgan.init();
molgan.events.on('ON_RECOGNITION', (e) => console.log(e))
molgan.events.on('ON_RECOGNITION', (e) => console.log(e))
console.log(molgan.events.events)
// molgan.addResultHandler('print');