// Exercício 5 - Função para inverter uma string

function inverterString(str: string): string {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

function main() {
    const stringOriginal = 'Hello, World!'; // String para ser invertida
    const stringInvertida = inverterString(stringOriginal);
    console.log(`Original: ${stringOriginal}`);
    console.log(`Invertida: ${stringInvertida}`);
}

// Executa o programa
main();
