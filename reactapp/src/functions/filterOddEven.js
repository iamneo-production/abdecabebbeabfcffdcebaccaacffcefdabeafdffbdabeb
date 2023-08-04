export function filterOdd(...args) {
    return args.filter(arg => arg % 2 !== 0);
  }
  
  export function filterEven(...args) {
    return args.filter(arg => arg % 2 === 0);
  }
  
  export function generateRandomList(n = 7) {
    return Array.from({length: n}, () => Math.floor(Math.random() * 100) + 1);
  }