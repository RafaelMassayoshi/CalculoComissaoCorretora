import PromptSync from "prompt-sync";

const prompt = PromptSync();

const vendedor = prompt("Informe o vendedor: ")
const faturamento= prompt("Informe o faturamento: ")

console.log(calcular(vendedor, faturamento))



function calcular(vendedor, faturamento) {

    let pagamentoCorretora;
    let pagamentoVendedor;
    let faixa = 2000;
    let porcentagemComissao = 0.80
    let ajuste = 0.05

   switch (true){

    case (faturamento <= faixa):  
        pagamentoVendedor = faturamento * porcentagemComissao;
        break

    case (faturamento <= (faixa * 2)):
        pagamentoVendedor = ((faturamento - 2000) * (porcentagemComissao - ajuste)) + 1600;
        break;

    case (faturamento <= (faixa * 3)):
        pagamentoVendedor = ((faturamento - 4000) * (porcentagemComissao - (ajuste * 2))) + 3100;
        break;

    case (faturamento <= (faixa * 4)):
        pagamentoVendedor = ((faturamento - 6000) * (porcentagemComissao - (ajuste * 3))) + 4500;
        break;

    case(faturamento > (faixa * 4)):
        pagamentoVendedor = ((faturamento - 8000) * (porcentagemComissao - (ajuste * 4))) + 5800;
    
   }

   


    const formatarBRL = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    pagamentoCorretora = `Corretora: ${formatarBRL(faturamento - pagamentoVendedor)}`;
    pagamentoVendedor = `${vendedor}: ${formatarBRL(pagamentoVendedor)}`;
    console.log(pagamentoCorretora);
console.log(pagamentoVendedor);
}


