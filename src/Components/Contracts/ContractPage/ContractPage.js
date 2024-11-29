import React, { useState, useRef, useContext } from "react";
import * as S from "./ContractPageStyle";
import { helpers } from "../../../Helpers/helpers";
import ReactToPrint from 'react-to-print';
import Loading from "../../Loading/Loading";
import { AuthContext } from "../../../context/AuthContext";

class ContractDocument extends React.Component {
    render() {
        const { contract } = this.props;

        return (
            <div style={{ padding: 20, fontFamily: "Arial, sans-serif", border: '1px solid #000', borderRadius: '5px', boxShadow: '2px 2px 10px rgba(0,0,0,0.2)' }}>
                <h1 style={{ textAlign: "center", marginBottom: '10px' }}>Contrato de Compra e Venda</h1>
                <p style={{ textAlign: "center", fontStyle: 'italic' }}>Este contrato é feito entre as partes abaixo:</p>

                <h2>Partes Contratantes:</h2>
                <p><strong>Vendedor:</strong> Nome do Vendedor</p>
                <p><strong>CPF do Vendedor:</strong> 123.456.789-00</p>
                <p><strong>Comprador:</strong> Nome do Comprador</p>
                <p><strong>CPF do Comprador:</strong> {contract.buyerCpf}</p>

                <h2>Detalhes do Produto:</h2>
                <p><strong>Produto:</strong> {contract.productName}</p>
                <p><strong>Descrição:</strong> Este é um produto de alta qualidade que promete</p>
                <p><strong>Quantidade:</strong> {contract.quantity}</p>
                <p><strong>Valor Unitário:</strong> R${helpers.formatToBrazilianCurrency(contract.uniValue)}</p>
                <p><strong>Valor Total:</strong> R${helpers.formatToBrazilianCurrency(contract.totalValue)}</p>

                <h2>Duração do Contrato:</h2>
                <p><strong>Duração do Investimento:</strong> {contract.duration} meses</p>

                <h2>Condições do Contrato:</h2>
                <p>O valor investido valorizará em <strong>{contract.finalIncome}%</strong> ao longo do período de <strong>{contract.duration} meses</strong>.</p>

                <p>Os saques são liberados após um período de {contract.daysToFirstWithdraw} dias após a confirmação do investimento.</p>
                <p>Penalidades por rescisão antecipada: Se o comprador decidir rescindir este contrato antes do término, uma taxa de 10% do valor total será aplicada.</p>

                <h2>Assinaturas:</h2>
                <p style={{ marginTop: '30px' }}>Assinatura do Vendedor: ___________________________________</p>
                <p style={{ marginTop: '15px' }}>Assinatura do Comprador: ___________________________________</p>
                <p style={{ textAlign: "center", marginTop: '10px', fontStyle: 'italic' }}>Data: {new Date().toLocaleDateString()}</p>
            </div>
        );
    }
}

export default function ContractPage({ contract, onClose }) {
    const [quantity, setQuantity] = useState(1);
    const [generatedContract, setGeneratedContract] = useState(null);
    const [load, setLoad] = useState(false);
    const { clientData, refreshClientData } = useContext(AuthContext);
    const [iAgree, setIAgree] = useState("");
    const componentRef = useRef();

    const handleIncrementor = (type) => {
        if (type === "-") {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        } else {
            setQuantity(quantity + 1);
        }
    };

    const generateContract = () => {
        setLoad(true);
        const totalValue = contract.uniValue * quantity;
        const finalIncome = (contract.finalIncome / 100) * (quantity * contract.uniValue);

        const newContract = {
            productName: contract.productName,
            quantity,
            totalValue,
            duration: contract.duration,
            finalIncome,
            uniValue: contract.uniValue, // Adiciona o valor unitário para uso no PDF
        };

        setTimeout(() => {
            setLoad(false);
            setGeneratedContract(newContract);
        }, 1200);
    };

    const handleBuy = async () => {
        if (iAgree) {
            const currentDate = new Date();
            const quantidadeMeses = parseInt(contract.duration);
            currentDate.setMonth(currentDate.getMonth() + quantidadeMeses);
            const brasiliaOffset = -3;
            const brasiliaDate = new Date(currentDate.getTime() + brasiliaOffset * 60 * 60 * 1000);
            const endContractDate = brasiliaDate.toISOString();

            const res = await helpers.novoContrato({
                clientId: clientData.id,
                quantity: quantity,
                discount: parseFloat(0) / 100,
                percentageProfit: parseFloat(contract.finalIncome) / 100,
                unityPrice: parseFloat(contract.uniValue),
                endContractDate: endContractDate,
            });

            if (res) {
                console.log("Criado com sucesso");
                await refreshClientData();
                onClose();
            } else {
                console.log("Erro ao criar");
            }
        } else {
            alert("Você precisa concordar com os termos do contrato.");
        }
    }
    return (
        <>
            <Loading load={load} />

            <S.ModalContainer>
                <S.ModalContentBox>
                    <S.CloseButton>
                        <img onClick={onClose} alt="botao voltar" src="./back-arrow.png" />
                    </S.CloseButton>

                    <S.ModalTitle>PÁGINA DO CONTRATO</S.ModalTitle>
                    <S.SelectedContractPart>
                        <S.Card>
                            <p className="title">Contrato Advanced 📄</p>
                            <div className="productImage">
                                <img src="introducer.jpeg.webp" alt="Imagem do Produto" />
                            </div>
                            <ul className="infoContract">
                                <li className="info">Lucro de {contract.finalIncome}%</li>
                                <li className="info">Saque liberado após {contract.daysToFirstWithdraw} dias</li>
                                <li className="info">Duração de {contract.duration / 12} anos</li>
                            </ul>
                            <div className="valorUnitario">
                                <span className="valor">R${helpers.formatToBrazilianCurrency(contract.uniValue)}</span>
                            </div>
                            <button className="selecionarBtn">Selecionado</button>
                        </S.Card>

                        <S.QuantitySelector>
                            <button className="incrementor" onClick={() => handleIncrementor("-")}>-</button>
                            <div className="view">{quantity}</div>
                            <button className="incrementor" onClick={() => handleIncrementor("+")}>+</button>
                        </S.QuantitySelector>

                        <S.TableInvestiment>
                            <S.Colunas>
                                <S.Item>Valor Unidade</S.Item>
                                <S.Item>Quantidade</S.Item>
                                <S.Item>Valor Total</S.Item>
                                <S.Item>Duração</S.Item>
                                <S.Item>Lucro Total</S.Item>
                            </S.Colunas>
                            <S.Linhas>
                                <S.Item>R${helpers.formatToBrazilianCurrency(contract.uniValue)}</S.Item>
                                <S.Item>{quantity}</S.Item>
                                <S.Item>R${helpers.formatToBrazilianCurrency(contract.uniValue * quantity)}</S.Item>
                                <S.Item>{contract.duration}</S.Item>
                                <S.Item>R${helpers.formatToBrazilianCurrency((contract.finalIncome / 100) * (quantity * contract.uniValue))}</S.Item>
                            </S.Linhas>
                        </S.TableInvestiment>
                    </S.SelectedContractPart>

                    <S.BotaoProsseguir onClick={generateContract}>
                        Gerar Contrato
                    </S.BotaoProsseguir>

                    {generatedContract && (
                        <>
                            <S.ContratoGeradoConteiner>
                                <h2 className="inform">Contrato Gerado</h2>
                                <S.MostrandoContrato>
                                    <ContractDocument contract={generatedContract} />
                                </S.MostrandoContrato>
                                <ReactToPrint
                                    trigger={() => <button style={{ margin: '20px 0', width: "200px", height: "40px", cursor: "pointer" }}>Imprimir Contrato</button>}
                                    content={() => componentRef.current}
                                />
                                <div style={{ display: 'none' }}>
                                    <ContractDocument ref={componentRef} contract={generatedContract} />
                                </div>
                            </S.ContratoGeradoConteiner>

                            <S.EuConcordo>
                                <span>Eu concordo com os termos do contrato</span>
                                <input
                                    checked={iAgree} // Use 'checked' para que o valor reflita o estado
                                    onChange={(e) => { setIAgree(e.target.checked) }} // Atualiza o estado com o valor booleano
                                    type="checkbox"
                                />                            </S.EuConcordo>


                            <S.FinalInfo>
                                <span>Selecione o método de pagamento</span>
                                <select>
                                    <option>PIX</option>
                                    <option>BOLETO</option>
                                    <option>CARTÃO DE CRÉDITO</option>
                                </select>

                                <button onClick={handleBuy}>REALIZAR COMPRA</button>
                            </S.FinalInfo>
                        </>

                    )}
                </S.ModalContentBox>
            </S.ModalContainer>
        </>
    );
}