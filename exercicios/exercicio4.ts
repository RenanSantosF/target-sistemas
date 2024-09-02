// Exercicio 4 - Dados de faturamento por estado
const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o percentual de representação
function calcularPercentuais(faturamento: { [estado: string]: number }): { [estado: string]: number } {
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    const percentuais: { [estado: string]: number } = {};

    for (const estado in faturamento) {
        percentuais[estado] = (faturamento[estado] / total) * 100;
    }

    return percentuais;
}

// Função principal
function calcula() {
    const percentuais = calcularPercentuais(faturamentoEstados);

    console.log("Percentual de representação por estado:");
    for (const estado in percentuais) {
        console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
    }
}

// Executa o programa
calcula();