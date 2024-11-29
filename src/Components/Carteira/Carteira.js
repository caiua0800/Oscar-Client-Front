import React, { useState, useEffect, useContext } from "react";
import * as S from "./CarteiraStyle";
import TransactionTable from "../Tabelas/WithDrawnsTable";
import { AuthContext } from "../../context/AuthContext";
import { helpers } from "../../Helpers/helpers";
import ModalDeSaque from "./ModalDeSaque/ModalDeSaque";

export default function Carteira() {

    const { clientData } = useContext(AuthContext);
    const [showModalSaque, setShowModalSaque] = useState(false);

    const onClose = () => {
        setShowModalSaque(false);
    }

    const onOpen = () => {
        setShowModalSaque(true);
    }

    return (
        <>
            {showModalSaque && (
                <ModalDeSaque onClose={onClose} />
            )}

            <S.CarteiraContainer>
                <S.RowOne>
                    <S.RowOneItem>
                        <S.Cartao>
                            <img className="logotipo-cartao" alt="logotipo teste" src="logotipo-teste.png" />
                            <div className="cartao-circle"><div className="circle-intern"></div></div>

                            <S.CardHolder>
                                <p className="cardHolderName">{clientData.name.toUpperCase()}</p>
                                <p className="cardHolderNum">{helpers.generateCreditCardNumber(clientData.cpf, clientData.dateCreated)}</p>
                                <div className="securityInfo">
                                    <div className="inf">
                                        <span className="lab">DATA DE CRIAÇÃO</span>
                                        <span className="labR">{helpers.formatDateToBrazilianFormat(clientData.dateCreated)}</span>
                                    </div>
                                    <div className="inf">
                                        <span className="lab">CÓD. DE SEGUR.</span>
                                        <span className="labR">275</span>
                                    </div>
                                </div>
                            </S.CardHolder>
                        </S.Cartao>
                        <S.GenerateCard onClick={onOpen}>REALIZAR SAQUE</S.GenerateCard>
                    </S.RowOneItem>

                    <S.RowOneItem>
                        <S.TableStrange>
                            <S.TitleItem> VALOR NA CARTEIRA </S.TitleItem>
                            <S.ItemsRow>
                                <div className="item">
                                    <div className="itemTitle">VALOR INTEIRO</div>
                                    <div className="itemVals">
                                        <div className="inf">U${helpers.formatToBrazilianCurrency((clientData.balance)/5.34)}</div>
                                        <div className="inf">R${helpers.formatToBrazilianCurrency(clientData.balance)}</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="itemTitle">VALOR DISPONÍVEL</div>
                                    <div className="itemVals">
                                        <div className="inf">U${helpers.formatToBrazilianCurrency(clientData.amountAvailableToWithdraw/5.34)}</div>
                                        <div className="inf">R${helpers.formatToBrazilianCurrency(clientData.amountAvailableToWithdraw)}</div>
                                    </div>
                                </div>
                            </S.ItemsRow>
                            <S.TitleItem> TOTAL JÁ OBTIDO </S.TitleItem>
                            <S.ItemsRow>
                                <div className="item">
                                    <div className="itemTitle">VALOR INTEIRO</div>
                                    <div className="itemVals">
                                        <div className="inf">U${helpers.formatToBrazilianCurrency(clientData.lucroTotalObtido/5.34)}</div>
                                        <div className="inf">R${helpers.formatToBrazilianCurrency(clientData.lucroTotalObtido)}</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="itemTitle">VALOR SACADO</div>
                                    <div className="itemVals">
                                        <div className="inf">U${helpers.formatToBrazilianCurrency(clientData.totalJaSacado/5.34)}</div>
                                        <div className="inf">R${helpers.formatToBrazilianCurrency(clientData.totalJaSacado)}</div>
                                    </div>
                                </div>
                            </S.ItemsRow>
                        </S.TableStrange>

                    </S.RowOneItem>
                </S.RowOne>

                <S.RowTwo>
                    <TransactionTable />
                </S.RowTwo>


            </S.CarteiraContainer>
        </>
    )
}