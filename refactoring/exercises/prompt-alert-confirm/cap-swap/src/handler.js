import { capSwap } from './logic.js';

export const capSwapHandler = () => {
  // read & process user input
  let userInput = null;
  while (userInput === null) {
    userInput = prompt('enter a string to cap-swap');
  }

  const newCapSwap = capSwap(userInput);

  // communicate result to user
  alert(newCapSwap);
};
