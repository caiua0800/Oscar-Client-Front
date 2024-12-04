import React, { useContext, useState } from "react";
import { QRCodeSVG } from "qrcode.react"; // Importa QRCodeSVG
import * as S from "./QrCodeContainerStyle";
import { helpers } from "../../Helpers/helpers";
import { useLoad } from "../../context/LoadContext";
import { AuthContext } from "../../context/AuthContext";

export default function QrCodeContainer({ ticketInfo, setTicketInfo }) {
    const [cancelText, setCancelText] = useState("");
    const { startLoading, stopLoadingDelay } = useLoad();
    const { refreshClientData } = useContext(AuthContext)

    if (!ticketInfo)
        return null;

    const handleClose = () => { setTicketInfo(null); }

    const handleCancel = async () => {
        if (cancelText.trim() !== "SIM") {
            alert("Para cancelar, digite SIM.");
            return;
        }
        startLoading();
        console.log(ticketInfo.idContract)
        const res = await helpers.cancelContractAsync(ticketInfo.idContract);
        if (res) {
            await refreshClientData()
        }
        stopLoadingDelay();
        alert(res ? "COMPRA CANCELADA COM SUCESSO" : "ERRO AO CANCELAR COMPRA");
    }

    const handleVerificarPagamento = async () => {
        startLoading();
        const res = await helpers.verifyPayment(ticketInfo.idContract, ticketInfo.ticketId);
        if (res) {
            alert("Pagamento Verificado, seu contrato já está valorizando.");
            await refreshClientData();
            setTicketInfo({
                ...ticketInfo,
                paid: true
            });
        } else {
            alert("Pagamento não foi verificado.");
        }
        stopLoadingDelay();
    }

    return (
        <S.QrCodeContent>
            <S.BoxQrContent>
                <span onClick={handleClose} className="exit">x</span>
                {!ticketInfo.paid && (
                    <>
                        <S.Title>FAÇA O PAGAMENTO ANTES QUE VENÇA SEU TICKET</S.Title>
                        <S.QrCodeBox>
                            <div className="qrBox">
                                <QRCodeSVG value={ticketInfo.qrCode} size="100%" />
                            </div>
                        </S.QrCodeBox>

                        <S.Valor>
                            <span>VALOR À PAGAR</span>
                            <span>R${ticketInfo && helpers.formatToBrazilianCurrency(ticketInfo.amount)}</span>
                        </S.Valor>

                        <S.Verificar>
                            <button onClick={handleVerificarPagamento}>VERIFICAR O PAGAMENTO</button>
                        </S.Verificar>

                        <S.CancelarArea>
                            <span className="ask">Deseja Cancelar Esta Compra?</span>
                            <div className="confirmationDiv">
                                <input value={cancelText} onChange={(e) => setCancelText(e.target.value)} className="boxConfirmCancel" placeholder="Digite SIM para confirmar" />
                                <button onClick={handleCancel} className="buttonConfirm">CONFIRMAR</button>
                            </div>
                        </S.CancelarArea>
                    </>
                )}
                {ticketInfo.paid && (
                    <>
                        <S.Title>SEU PAGAMENTO FOI VERIFICADO 👍🏻</S.Title>
                    </>
                )}
            </S.BoxQrContent>
        </S.QrCodeContent>
    );
}