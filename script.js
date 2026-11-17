// Processador de Checkout de E-commerce
const valorCompra = 350;
const clienteVip = false;
const formaPagamento = "boleto";

if (valorCompra <= 0) {
    console.log("Erro: Valor de compra inválido.");
} else if (valorCompra < 100) {
    console.log("Frete padrão: R$ 20,00.");
} else if ((valorCompra >= 100 && valorCompra < 300) || clienteVip) {
    console.log("Benefício aplicado: Frete Grátis!");
} else {
    console.log("Benefício aplicado: Frete Grátis + 10% de desconto!");
}

switch (formaPagamento) {
    case "pix":
        console.log("Gerando QR Code com aprovação instantânea...");
        break;
    case "credito":
    case "debito":
        console.log("Conectando à operadora de cartão...");
        break;
    case "boleto":
        console.log("Gerando linha digitável com vencimento em 3 dias úteis...");
        break;
    default:
        console.log("Erro: Forma de pagamento não aceita.");
        break;
}

// Sistema de Triagem de Suporte Técnico / Helpdesk
const categoriaChamado = "bug";
const prejuizoEstimado = 3000;
const clienteEnterprise = false;

switch (categoriaChamado) {
    case "financeiro":
        console.log("Direcionando ticket para a equipe de Faturamento e Cobrança.");
        break;
    case "bug":
        console.log("Direcionando ticket para a Engenharia de Software (Nível 2).");
        break;
    case "acesso":
    case "duvida":
        console.log("Direcionando ticket para o Atendimento Geral (Nível 1).");
        break;
    default:
        console.log("Erro: Categoria de chamado inválida.");
        break;
}

if (prejuizoEstimado < 0) {
    console.log("Erro: Valor de prejuízo inválido.");
} else if (prejuizoEstimado >= 1000 || clienteEnterprise) {
    console.log("Prioridade CRÍTICA: Atendimento imediato (SLA: 1 hora).");
} else if (prejuizoEstimado >= 1000 && prejuizoEstimado < 1000 && !clienteEnterprise) {
    console.log("Prioridade ALTA: Atendimento em até 4 horas.");
    ("Prioridade NORMAL: Atendimento em até 24 horas.");
}