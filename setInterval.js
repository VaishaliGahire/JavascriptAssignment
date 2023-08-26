function printNumbersWithInterval(start, end, interval) {
    let currentNumber = start;
    const intervalId = setInterval(() => {
      console.log(currentNumber++);
      if (currentNumber > end) clearInterval(intervalId);
    }, interval);
  }
  
  printNumbersWithInterval(1, 5, 1000); // Prints numbers from 1 to 5 with a 1-second interval
  