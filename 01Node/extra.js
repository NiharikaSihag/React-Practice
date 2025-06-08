console.log('1. Script start');

// Timer phase task
setTimeout(() => {
  console.log('2. setTimeout callback');
  
  Promise.resolve().then(() => {
    console.log('3. Promise inside setTimeout');
  });
  
  process.nextTick(() => {
    console.log('4. nextTick inside setTimeout');
  });
}, 0);

// Check phase task
setImmediate(() => {
  console.log('5. setImmediate callback');
  
  Promise.resolve().then(() => {
    console.log('6. Promise inside setImmediate');
  });
});

// Microtask queue
Promise.resolve().then(() => {
  console.log('7. Promise (microtask)');
});

// nextTick queue (higher priority than Promise microtasks)
process.nextTick(() => {
  console.log('8. nextTick (microtask)');
});

console.log('9. Script end');


// 1,9,8,7,2,4,3,5,6