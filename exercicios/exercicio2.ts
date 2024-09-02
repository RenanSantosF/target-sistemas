// Exercicio 2 - Calculo de Fibonacci

function pertenceFibonacci(numero: number): boolean {
  if (numero < 0) return false;

  let a: number = 0;
  let b: number = 1;

  for (; b < numero; ) {
      let temp: number = a;
      a = b;
      b = temp + b;
  }

  return b === numero;
}

let numero: number = 14;

if (pertenceFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}