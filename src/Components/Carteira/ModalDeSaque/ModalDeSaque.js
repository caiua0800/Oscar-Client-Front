import React, { useState, useEffect, useContext } from "react";
import * as S from "./ModalDeSaqueStyle";
import { helpers } from "../../../Helpers/helpers";
import { AuthContext } from "../../../context/AuthContext";

export default function ModalDeSaque({ onClose }) {
    const { clientData, refreshClientData } = useContext(AuthContext);
    const [valorDesejado, setValorDesejado] = useState(0);
    const [corDoInput, setCorDoInput] = useState("white");

    useEffect(() => {
        if (valorDesejado && valorDesejado.trim() !== "") {
            if (valorDesejado <= 0) {
                setCorDoInput("red");
            } else if (valorDesejado <= clientData.amountAvailableToWithdraw && valorDesejado > 0) {
                setCorDoInput("green");
            } else {
                setCorDoInput("red");
            }
        } else {
            setCorDoInput("white");
        }
    }, [valorDesejado, clientData.amountAvailableToWithdraw]);

    return (
        <S.ModalContainer>
            <S.ModalContentBox>

                <S.BackButton>
                    <img onClick={onClose} alt="voltar" src="./back-arrow.png" />
                </S.BackButton>

                <S.ModalTitle>Realize seu saque <img alt="Saque Icone" src="./withdraw-icon.png" /></S.ModalTitle>

                <S.DisponivelSaque>
                    <p>Disponível: </p>
                    <span 
                        onClick={() => setValorDesejado(clientData.amountAvailableToWithdraw.toFixed(2))} 
                        style={{ color: clientData.amountAvailableToWithdraw > 0 ? "rgba(100, 200, 0, 1)" : "rgba(0, 50, 200, 1)" }}
                    >
                        R${helpers.formatToBrazilianCurrency(clientData.amountAvailableToWithdraw)}
                    </span>
                </S.DisponivelSaque>

                <S.SelecioneValor>
                    <p>Digite a quantidade desejada</p>
                    <div className="inputBox">
                        <input 
                            style={{ color: corDoInput }} 
                            value={valorDesejado} 
                            onChange={(e) => setValorDesejado(e.target.value)} 
                            type="number" 
                        />
                        <button onClick={() => setValorDesejado(clientData.amountAvailableToWithdraw.toFixed(2))}>TOTAL</button>
                    </div>
                    <span className="Aviso">
                        Será cobrado uma taxa de 4% em cima do saque
                    </span>
                </S.SelecioneValor>

                <S.BotaoSaque onClick={() => helpers.realizarSaque(clientData, valorDesejado, onClose, refreshClientData)}>Realizar Solicitação</S.BotaoSaque>
            </S.ModalContentBox>
        </S.ModalContainer>
    );
}