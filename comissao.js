import PromptSync from "prompt-sync";

const prompt = PromptSync();

const vendedor = prompt("Informe o vendedor: ")
const faturamento= prompt("Informe o faturamento: ")

console.log(calcular(vendedor, faturamento))
function calcular(vendedor, faturamento) {

    let pagamentoCorretora;
    let pagamentoVendedor;

    if
        (faturamento <= 2000) {
        pagamentoVendedor = faturamento * 0.8;
        pagamentoCorretora = faturamento * 0.2;
    } else if
        (faturamento <= 4000) {
        pagamentoVendedor = ((faturamento - 2000) * 0.75) + 1600;
        pagamentoCorretora = ((faturamento - 2000) * 0.25) + 400;
    } else if
        (faturamento <= 6000) {
        pagamentoVendedor = ((faturamento - 4000) * 0.70) + 3100;
        pagamentoCorretora = ((faturamento - 4000) * 0.30) + 900;
    } else if
        (faturamento <= 8000) {
        pagamentoVendedor = ((faturamento - 6000) * 0.65) + 4500;
        pagamentoCorretora = ((faturamento - 6000) * 0.35) + 1500;
    } else {
        pagamentoVendedor = ((faturamento - 8000) * 0.60) + 5800;
        pagamentoCorretora = ((faturamento - 8000) * 0.40) + 2200;
    }

    const formatarBRL = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    pagamentoCorretora = `Corretora: ${formatarBRL(pagamentoCorretora)}`;
    pagamentoVendedor = `${vendedor}: ${formatarBRL(pagamentoVendedor)}`;
    console.log(pagamentoCorretora);
console.log(pagamentoVendedor);
}


