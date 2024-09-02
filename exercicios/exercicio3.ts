// importações
import * as fs from 'fs';

// Exercicio 3 - Calcula o menor, maior e número de dias acima da média
function analisarFaturamento(dados: { dia: number, faturamento: number }[]): { menor: number, maior: number, diasAcimaMedia: number } {
    let menor: number = Infinity;
    let maior: number = -Infinity;
    let somaFaturamento: number = 0;
    let diasComFaturamento: number = 0;
    let diasAcimaMedia: number = 0;

    // Calcula o menor, maior e soma dos faturamentos
    for (const dado of dados) {
        if (dado.faturamento > 0) {
            if (dado.faturamento < menor) menor = dado.faturamento;
            if (dado.faturamento > maior) maior = dado.faturamento;
            somaFaturamento += dado.faturamento;
            diasComFaturamento++;
        }
    }

    // Calcula a média mensal
    let mediaMensal: number = somaFaturamento / diasComFaturamento;

    // Conta os dias com faturamento acima da média
    for (const dado of dados) {
        if (dado.faturamento > mediaMensal) diasAcimaMedia++;
    }

    return { menor, maior, diasAcimaMedia };
}

// Função principal
function main() {
    // Lê o arquivo .json com os dados de faturamento
    const dadosJson = fs.readFileSync('faturamento.json', 'utf-8');
    const dados = JSON.parse(dadosJson);

    const resultado = analisarFaturamento(dados);

    // resultado
    console.log(`Menor valor de faturamento: ${resultado.menor}`);
    console.log(`Maior valor de faturamento: ${resultado.maior}`);
    console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaMedia}`);
}

// Executa o programa
main();