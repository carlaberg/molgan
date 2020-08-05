import message from './message'
console.log(message)

// import scripts
import { AudioProcessor } from './AudioProcessor';

// run scripts
const audio = new AudioProcessor();
audio.init();
audio.addResultHandler('print');