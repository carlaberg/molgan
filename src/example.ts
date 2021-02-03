import { molgan } from './';

// console.log(molgan2)


molgan.init();

molgan.addCommands({
  name: 'add',
  commandString: 'bulle',
  callback: () => {
    console.log('callbacken')
    molgan.speak('banan')
  }
})

molgan.on('ON_RECOGNITION', (e) => {
  console.log(e)
  // molgan.speak(e?.result);
});