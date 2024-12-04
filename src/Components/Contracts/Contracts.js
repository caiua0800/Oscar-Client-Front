import React, { useState, useEffect, useContext } from "react";
import * as S from "./ContractsStyle";
import ContractPage from "./ContractPage/ContractPage";

export default function Contracts() {

    const [pageContractShow, setPageContractShow] = useState(null);

    const onClose = () => {
        setPageContractShow(null);
    }

    return (
        <>
            {pageContractShow && (
                <ContractPage onClose={onClose} contract={pageContractShow} />
            )}

            <S.ContratosContainer>
                <S.Title>VEJA NOSSOS PRODUTOS</S.Title>


                <S.ProductsContainerArea style={{ marginTop: "100px" }}>
                    <h2>Produtos mais vendidos 🔥</h2>

                    <S.ProductsList>
                        <S.Card>
                            <p className="title">Contrato Introducer 📄</p>

                            <div className="productImage">
                                <img src="introducer.jpeg.webp" />
                            </div>

                            <ul className="infoContract">
                                <li className="info">Lucro de 200%</li>
                                <li className="info">Saque liberado após 90 dias</li>
                                <li className="info">Duração de 3 anos</li>
                            </ul>

                            <div className="valorUnitario">
                                <span className="valor">R$1,00</span>
                            </div>

                            <button className="selecionarBtn" onClick={() => setPageContractShow({
                                uniValue: 1,
                                daysToFirstWithdraw: 90,
                                duration: 36,
                                finalIncome: 200,
                                productName: "Contrato Introducer"
                            })}>Comprar</button>
                        </S.Card>

                        <S.Card>
                            <p className="title">Contrato Colaborative 📄</p>

                            <div className="productImage">
                                <img src="introducer.jpeg.webp" />
                            </div>

                            <ul className="infoContract">
                                <li className="info">Lucro de 250%</li>
                                <li className="info">Saque liberado após 60 dias</li>
                                <li className="info">Duração de 4 anos</li>
                            </ul>

                            <div className="valorUnitario">
                                <span className="valor">R$300,00</span>
                            </div>

                            <button className="selecionarBtn" onClick={() => setPageContractShow({
                                uniValue: 300,
                                daysToFirstWithdraw: 60,
                                duration: 48,
                                finalIncome: 250,
                                productName: "Contrato Colaborative"
                            })}>Comprar</button>
                        </S.Card>

                        <S.Card>
                            <p className="title">Contrato Advanced 📄</p>

                            <div className="productImage">
                                <img src="introducer.jpeg.webp" />
                            </div>

                            <ul className="infoContract">
                                <li className="info">Lucro de 400%</li>
                                <li className="info">Saque liberado após 60 dias</li>
                                <li className="info">Duração de 5 anos</li>
                            </ul>

                            <div className="valorUnitario">
                                <span className="valor">R$1.500,00</span>
                            </div>

                            <button className="selecionarBtn" onClick={() => setPageContractShow({
                                uniValue: 1500,
                                daysToFirstWithdraw: 60,
                                duration: 60,
                                finalIncome: 400,
                                productName: "Contrato Advanced"
                            })}>Comprar</button>
                        </S.Card>
                    </S.ProductsList>
                </S.ProductsContainerArea>


                <S.SimulacaoContainer>
                    <h1 className="title">Faça uma simulação!</h1>
                    <S.Simulacao>
                        <div className="boxes">
                            <div className="itemBox">Quanto você está disposto a investir?</div>
                            <div className="itemBox">
                                <select>
                                    <option>Menos de R$1.000,00</option>
                                    <option>Entre R$1.000,00 a R$5.000,00</option>
                                    <option>Entre R$5.000,00 a R$10.000,00</option>
                                    <option>Entre R$10.000,00 a R$20.000,00</option>
                                    <option>Entre R$20.000,00 a R$30.000,00</option>
                                    <option>Entre R$30.000,00 a R$40.000,00</option>
                                    <option>Entre R$40.000,00 a R$50.000,00</option>
                                    <option>Entre R$50.000,00 a R$60.000,00</option>
                                    <option>Entre R$60.000,00 a R$70.000,00</option>
                                    <option>Entre R$80.000,00 a R$90.000,00</option>
                                    <option>Entre R$100.000,00 a R$150.000,00</option>
                                    <option>Entre R$150.000,00 a R$200.000,00</option>
                                    <option>Entre R$200.000,00 a R$250.000,00</option>
                                    <option>Entre R$250.000,00 a R$300.000,00</option>
                                    <option>Entre R$300.000,00 a R$500.000,00</option>
                                    <option>Entre R$500.000,00 a R$1.000.000,00</option>
                                </select>
                            </div>
                        </div>
                        <div className="boxes">
                            <div className="itemBox">Quanto tempo seria o contrato ideal pra você?</div>
                            <div className="itemBox">
                                <select>
                                    <option>2 Anos</option>
                                    <option>3 Anos</option>
                                    <option>4 Anos</option>
                                    <option>5 Anos</option>
                                </select>
                            </div>
                        </div>

                        <button>GERAR PROPOSTA</button>
                    </S.Simulacao>
                </S.SimulacaoContainer>
            </S.ContratosContainer>
        </>
    )
}