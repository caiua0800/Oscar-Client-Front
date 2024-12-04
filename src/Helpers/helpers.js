import axios from "axios";
import CryptoJS from "crypto-js";
import { startLoading, stopLoading, stopLoadingDelay } from "../context/LoadContext";

export const helpers = {

    formatToBrazilianCurrency: (value) => {
        try {
            // Tenta converter o valor para um número, caso seja uma string
            let number = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : Number(value);

            // Se a conversão não resulta em um número, retorna '0,00'
            if (isNaN(number)) {
                return '0,00';
            }

            // Usa o método toLocaleString para formatar
            return number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } catch (error) {
            console.error('Erro ao formatar valor:', error);
            return '0,00'; // Retorna "0,00" no caso de algum erro inesperado
        }
    },

    cadastro: async (cliente) => {
        if (cliente) {
            try {
                const res = await axios.post(`${process.env.REACT_APP_BASE_ROUTE}client`, cliente);
                console.log(`Resposta Servidor (Criação De Cliente): ${res}`);
                return true;
            } catch (err) {
                console.log(`Erro Servidor (Criação De Cliente): ${err}`);
                return false;
            }
        } else {
            alert("Erro ao criar o Cliente.");
            return false;
        }
    },

    formatDateToBrazilianFormat: (isoString) => {
        try {
            const date = new Date(isoString);

            // Extraindo partes da data
            const day = String(date.getUTCDate()).padStart(2, '0');
            const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Mês em JavaScript vai de 0 a 11
            const year = date.getUTCFullYear();

            // Extraindo partes do tempo
            const hours = String(date.getUTCHours()).padStart(2, '0');
            const minutes = String(date.getUTCMinutes()).padStart(2, '0');
            const seconds = String(date.getUTCSeconds()).padStart(2, '0');

            // Formatando a data de acordo com o formato desejado
            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        } catch (error) {
            console.error('Erro ao formatar a data:', error);
            return null; // Retorne null ou uma string indicando erro, conforme necessário
        }
    },


    handlePurchaseStatus: (status) => {
        switch (status) {
            case 1:
                return <span style={{ color: "rgba(0, 150, 255, 1" }}>Pendente, Clique Aqui</span>
            case 2:
                return <span style={{ color: "rgba(100, 255, 0, 1" }}>Valorizando</span>
            case 3:
                return <span style={{ color: "rgba(255, 0, 0, 1" }}>Finalizado</span>
            case 4:
                return <span style={{ color: "rgba(255, 170, 100, 1)" }}>Cancelado</span>
            default:
                return ""
        }
    },

    calculateEarnings: (purchases) => {
        const earnings = [0, 0, 0, 0, 0]; // Array para armazenar o ganho a cada um dos últimos 5 meses
        const currentDate = new Date();

        purchases.forEach(purchase => {
            const purchaseDate = new Date(purchase.purchaseDate);
            const totalPrice = purchase.totalPrice;

            for (let monthOffset = 0; monthOffset < 5; monthOffset++) {
                const currentMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - monthOffset, 1);
                const nextMonthDate = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1);

                // Verificar se a compra está parcial ou totalmente neste mês
                if (purchaseDate < nextMonthDate && purchaseDate < currentMonthDate) {
                    const startDate = purchaseDate > currentMonthDate ? purchaseDate : currentMonthDate;
                    const endDate = nextMonthDate > currentDate ? currentDate : nextMonthDate;

                    const days = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));

                    if (days > 0) {
                        const monthlyEarnings = days * (0.001399 * totalPrice);
                        earnings[4 - monthOffset] += monthlyEarnings;
                    }
                }

                // Incluímos o caso em que a compra é feita dentro do mesmo mês
                if (purchaseDate >= currentMonthDate && purchaseDate < nextMonthDate) {
                    const endDate = nextMonthDate > currentDate ? currentDate : nextMonthDate;
                    const days = Math.round((endDate - purchaseDate) / (1000 * 60 * 60 * 24));

                    if (days > 0) {
                        const monthlyEarnings = days * (0.001399 * totalPrice);
                        earnings[4 - monthOffset] += monthlyEarnings;
                    }
                }
            }
        });

        return earnings;
    },

    handleWithdrawnStatus: (status) => {

        switch (status) {
            case 1:
                return "Pendente";
            case 2:
                return "Pago";
            case 3:
                return "Cancelado";
            default:
                return "Não Encontrado"
        }
    },

    handleWithdrawnStatusColor: (status) => {

        switch (status) {
            case 1:
                return "rgba(0, 200, 255, 1)";
            case 2:
                return "rgba(100, 200, 0, 1)";
            case 3:
                return "rgba(255, 0, 0, 1)";
            default:
                return "white"
        }
    },

    uploadProfilePicture: (image) => {
        const accessPointURL = 'https://oscar-access-q6n985zhpxz88hfydcposzdmrtz7wsae1a-s3alias.s3-accesspoint.amazonaws.com/';

        const formData = new FormData();
        formData.append('file', image); // Adiciona a imagem ao FormData

        axios.post(accessPointURL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err); // Mostra qualquer erro que ocorrer
            });
    },

    md5: (string) => {
        return CryptoJS.MD5(string).toString();
    },

    generateCreditCardNumber: (cpf, dateCreated) => {
        const uniqueString = `${cpf}${dateCreated}${Math.floor(Math.random() * 10000)}`;
        const hash = helpers.md5(uniqueString);
        const numericString = hash.replace(/[^\d]/g, '').slice(0, 16);
        const paddedCardNumber = numericString.padStart(16, '0');
        const formattedCardNumber = `${paddedCardNumber.slice(0, 4)} ${paddedCardNumber.slice(4, 8)} ${paddedCardNumber.slice(8, 12)} ${paddedCardNumber.slice(12, 16)}`;
        return formattedCardNumber;
    },

    realizarSaque: async (client, amount, onClose, refreshClientData) => {
        if (client && client.walletExtract.purchases && amount && amount > 0) {
            var compras = client.walletExtract.purchases;
            var comprasDisponiveis = [];
            const valoresEIds = [];

            compras.forEach(compra => {
                if (helpers.isFirstIncreasementMoreThan90DaysOld(compra))
                    comprasDisponiveis.push(compra);
            })

            var valorASacar = amount;
            let res1 = false;
            let res2 = false;

            if (client.balance - client.blockedBalance > 0) {
                if (comprasDisponiveis.length > 0) {
                    comprasDisponiveis.forEach(c => {
                        if ((c.currentIncome - c.amountWithdrawn) >= 1 && valorASacar > 0) {
                            var valorDisponivelContrato = (c.currentIncome - c.amountWithdrawn);
                            if (valorDisponivelContrato >= valorASacar) {
                                valoresEIds.push({ id: c.purchaseId, valor: valorASacar });
                                valorASacar = 0;
                            } else if (valorDisponivelContrato < valorASacar && valorDisponivelContrato >= 0) {
                                valoresEIds.push({ id: c.purchaseId, valor: valorDisponivelContrato });
                                valorASacar -= valorDisponivelContrato;
                            }
                        }
                    })

                    if (valoresEIds.length > 0) {
                        try {
                            for (const contract of valoresEIds) {
                                try {
                                    const res = await axios.post(`${process.env.REACT_APP_BASE_ROUTE}withdrawal`, {
                                        clientId: client.id,
                                        amountWithdrawn: contract.valor,
                                        itemId: contract.id
                                    });

                                    if (res.status === 201) {
                                        res1 = true;
                                        console.log("Saque criado com sucesso.", res.data);
                                    } else {
                                        console.log("Erro ao criar saque:", res);
                                        alert("Erro ao criar saque.");
                                        return null;
                                    }
                                } catch (error) {
                                    console.log("Error ao processar o saque para o contrato:", contract.purchaseId, error);
                                    const errorMessage = error.response && error.response.data
                                        ? error.response.data
                                        : 'Erro ao criar saque.';

                                    const acharMensagem = "Não foi possível realizar o saque: Saldo bloqueado.";
                                    if (errorMessage.toLowerCase().includes(acharMensagem.toLowerCase())) {
                                        alert(acharMensagem);
                                    } else {
                                        alert(errorMessage);
                                    }
                                }
                            }
                            await refreshClientData();
                            onClose();
                            return true;
                        } catch (error) {
                            console.log("Erro geral ao realizar o saque:", error);
                            alert("Um erro inesperado ocorreu ao tentar realizar o saque.");
                            return null;
                        }
                    }

                }

                if (valorASacar > 0) {
                    const res = await axios.post(`${process.env.REACT_APP_BASE_ROUTE}withdrawal/extraBalance`, {
                        clientId: client.id,
                        amountWithdrawn: valorASacar,
                        itemId: ""
                    });

                    valorASacar = 0;

                    if (res.status === 201) {
                        res2 = true;
                        console.log("Saque criado com sucesso.", res.data);
                        alert("Saque criado com sucesso.", res.data);
                        onClose();
                        await refreshClientData();
                        return;
                    } else {
                        console.log("Erro ao criar saque:", res);
                        alert("Erro ao criar saque.");
                        return null;
                    }
                }

                if (res1 && res2) {
                    alert("Saque Criado com sucesso.");
                    onClose();
                    return;
                }
            }

        } else {
            return false;
        }
    },

    isFirstIncreasementMoreThan90DaysOld: (purchase) => {
        const { firstIncreasement, status } = purchase;

        if (status === 1 || status === 4 || !firstIncreasement)
            return false;

        const firstIncreasementDate = new Date(firstIncreasement);

        const currentDate = new Date();

        const timeDifference = currentDate - firstIncreasementDate;

        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        return daysDifference >= 90;
    },

    novoContrato: async (contrato) => {
        if (contrato) {
            contrato.type = 0;
            contrato.coin = "BRL";
            contrato.status = 1;

            try {
                const res = await axios.post(`${process.env.REACT_APP_BASE_ROUTE}purchase`, contrato);
                if (res.status === 201) {
                    alert("Contrato criado com sucesso.");
                    return res.data;
                } else {
                    alert("Erro ao criar contrato.");
                    return null;
                }
            } catch (error) {
                console.log("Error: ");
                console.log(error);
                alert("Erro ao criar contrato.");
            }
        } else {
            alert("Erro ao criar contrato.")
        }
    },

    professionsArray: [
        "Professor",
        "Engenheiro",
        "Médico",
        "Enfermeiro",
        "Arquiteto",
        "Programador",
        "Designer Gráfico",
        "Contador",
        "Advogado",
        "Psicólogo",
        "Cientista",
        "Dentista",
        "Economista",
        "Gerente de Projetos",
        "Redator",
        "Especialista em Marketing",
        "Analista de Dados",
        "Fotógrafo",
        "Agrônomo",
        "Veterinário",
        "Fisioterapeuta",
        "Biomédico",
        "Técnico em Informática",
        "Recepcionista",
        "Assistente Administrativo",
        "Condutor de Transporte",
        "Eletricista",
        "Mecânico",
        "Operador de Máquinas",
        "Soldador",
        "Pedreiro",
        "Cozinheiro",
        "Padeiro",
        "Artista",
        "Jardineiro",
        "Reparador de Eletrodomésticos",
        "Estudante",
        "Analista Financeiro",
        "Assistente Social",
        "Cabeleireiro",
        "Manicure",
        "Esteticista",
        "Apoio Técnico",
        "Sushiman",
        "Clínico Geral",
        "Médico Pediatra",
        "Médico Radiologista",
        "Médico Dermatologista",
        "Professor de Educação Física",
        "Hierocrata",
        "Gambiteiro",
        "Comerciante",
        "Aeroportuário",
        "Técnico de Segurança do Trabalho",
        "Analista de Recursos Humanos",
        "Desenvolvedor Web",
        "Analista de Sistemas",
        "Consultor de Vendas",
        "Agente de Viagens",
        "Gestor de Recursos Humanos",
        "Diretor",
        "Supervisor",
        "Coordenador",
        "Estatístico",
        "Tradutor",
        "Interprete",
        "Gestor de Projetos",
        "Disciplinador",
        "Pesquisador",
        "Porteiro",
        "Servidor Público",
        "Taxista",
        "Ciclista",
        "Promotor de Vendas",
        "Gerente de loja",
        "Líder de Equipe",
        "Assistente de Vendas",
        "Empreendedor",
        "Administrador",
        "Assistente Farmacêutico",
        "Confeiteiro",
        "Biólogo",
        "Físico",
        "Químico",
        "Engenheiro Civil",
        "Engenheiro Elétrico",
        "Engenheiro Mecânico",
        "Analista de Segurança da Informação",
        "Engenheiro de Software",
        "Desenvolvedor de Aplicativos",
        "Gerente de TI",
        "Gestor de Produto",
        "Gerente de Marketing",
        "Engenheiro Ambiental",
        "Operador de Telemarketing",
        "Gerente Financeiro",
        "Técnico em Enfermagem",
        "Técnico em Radiologia",
        "Terapeuta",
        "Assistente de Saúde",
        "Estagiário",
        "Logístico",
        "Analista de Qualidade",
        "Analista de Comunicação",
        "Coordenador de Eventos",
        "Marketing Digital",
        "Gestor de E-commerce",
        "Maquiador",
        "Engenheiro Químico",
        "Engenheiro de Produção",
        "Designer de Produto",
        "Técnico em Química",
        "Químico Industrial",
        "Gestor de Compras",
        "Heitor",
        "Técnico de Farmácia",
        "Padrão de Beleza",
        "Gestor de Suprimentos",
        "Dirigente",
        "Relações Públicas",
        "Arquiteto Urbanista",
        "Agente de Trânsito",
        "Empresário",
        "Administrador de Banco de Dados",
        "Inspetor",
        "Trabalhador Rural",
        "Operador de Computador",
        "Acupunturista",
        "Clínico Veterinário",
        "Guias de Turismo",
        "Orientador Educacional",
        "Coach",
        "Consultor Empresarial",
        "Entregador",
        "Técnico em Manutenção",
        "Técnico em Meio Ambiente",
        "Pescador",
        "Fertilizante",
        "Técnico Agrícola",
        "Outros"
    ],

    monthlyIncomesArray: [
        "R$1.200,00 à R$2.000,00",
        "R$2.000,00 à R$3.000,00",
        "R$3.000,00 à R$5.000,00",
        "R$5.000,00 à R$8.000,00",
        "R$8.000,00 à R$10.000,00",
        "R$10.000,00 à R$15.000,00",
        "R$15.000,00 à R$20.000,00",
        "R$20.000,00 à R$30.000,00",
        "R$30.000,00 à R$50.000,00",
        "R$50.000,00 à R$80.000,00",
        "R$80.000,00 à R$100.000,00",
        "R$100.000,00 à R$300.000,00",
        "R$300.000,00 à R$500.000,00",
        "R$500.000,00 à R$1.000.000,00",
        "Mais de R$1.000.000,00",
    ],

    cancelContractAsync: async (contratoId) => {
        if (contratoId) {
            try {
                const res = await axios.put(`${process.env.REACT_APP_BASE_ROUTE}purchase/${contratoId}/3`);
                if (res.status === 204) {
                    return true;
                } else {
                    console.log(res);
                    return false;
                }
            } catch (err) {
                console.log(err);
                return false;
            }
        } else {
            return false;
        }
    },

    verifyPayment: async (contratoId, ticketId) => {
        if (contratoId) {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_ROUTE}purchase/verify/${contratoId}/${ticketId}`);
                console.log(res.data);
    
                if (res.data.paid) {
                    console.log("Pagamento foi verificado e está pago!");
                    return true;
                } else {
                    console.log("Pagamento não foi encontrado ou não foi verificado.");
                    return false;
                }
            } catch (err) {
                console.error("Erro ao verificar pagamento:", err);
                return false;
            }
        }
    }

}