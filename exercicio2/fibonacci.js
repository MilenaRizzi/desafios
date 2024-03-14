function fibonnacci (n) {
  let fibN2 = 0;
  let fibN1 = 1;
  let fibN = n;
  let isAdded = false;

  for(let i = 0; i <= n; i++){
      fibN = fibN1 + fibN2;
      fibN2 = fibN1;
      fibN1 = fibN;

      if(fibN === n) {
        isAdded = true;
      }
      console.log(fibN)
  }

  if(isAdded || n === 0) {
    console.log(`O número ${n} pertece a sequência de Fibonacci`)
  } else {
    console.log(`O número ${n} não pertece à sequência de Fibonacci`)
  }
} 

console.log(fibonnacci(0));
console.log(fibonnacci(10));