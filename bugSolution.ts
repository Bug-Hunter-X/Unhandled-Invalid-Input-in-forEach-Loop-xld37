function printNumber(num: number): void {
  console.log(num);
}

function processData(data: string[]): void {
  data.forEach(item => {
    const num = parseInt(item, 10);
    if (isNaN(num)) {
      console.error(`Invalid input: ${item}`);
      return; //added return statement to stop further execution for invalid input
    }
    printNumber(num);
  });
}

const data = ['1', '2', 'abc', '3'];
processData(data); 