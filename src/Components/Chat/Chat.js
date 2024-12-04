import React, { useState, useEffect, useContext } from "react";
import * as S from "./ChatStyle";
import { AuthContext } from "../../context/AuthContext";
import { helpers } from "../../Helpers/helpers";
import axios from "axios";

export default function Chat() {
    const { clientData } = useContext(AuthContext)
    const [chat, setChat] = useState(null);
    const [sendMessageInput, setSendMessageInput] = useState("");

    const name = clientData && (clientData.name.split(" ")[0] + " " + clientData.name.split(" ")[clientData.name.split(" ").length - 1])

    useEffect(() => {
        if(!chat){
            axios.get(`${process.env.REACT_APP_BASE_ROUTE}chat/${clientData.id}`).then(res => {
                if(res){
                    setChat(res.data);
                }
            }).catch(err => {
                console.log(err)
            })
        }

    }, [])

    const atualizarTodosOsChats = async () => {
        console.log("")
    }

    const atualizarChat = async () => {
        console.log("")
    }


    const sendMessage = async () => {
        if (sendMessageInput.trim() !== "") {
            await axios.post(`${process.env.REACT_APP_BASE_ROUTE}chat/${clientData.id}/send`, {
                Msg: sendMessageInput,
                ClientName: "...",
                isResponse: false
            }).then(res => {
                if (res) {
                    setChat(prev => ({
                        ...prev,
                        messages: res.data.messages
                    }));
                    setSendMessageInput("");
                }
            }).catch(err => {
                console.log(err);
                alert("Erro ao enviar mensagem");
            });
        }
    };

    return (
        <>
            <S.ChatContainer>
                <S.Title>Chat Da Plataforma 💬</S.Title>

                <S.ChatsBox>
                    <S.Conversation>
                        <>
                            <S.Header>
                                <span className="clientName">{name}</span>
                                <div className="optionsMenu">
                                    <img alt="options menu" src="./options-menu-icon.png" />
                                </div>
                            </S.Header>

                            <S.ConversationsBox>
                                {chat && chat.messages.map((msg, i) => (
                                    <S.ChatLine style={{ justifyContent: !msg.isResponse ? "end" : "start" }}>
                                        <div className="line">
                                            <li className="name" style={{ textAlign: !msg.isResponse ? "end" : "start" }}>{!msg.isResponse ? "Você" : "Suporte"}</li>
                                            <div className="boxMessage">
                                                <span style={{ textAlign: !msg.isResponse ? "end" : "start" }} className="msg"><strong>Msg:</strong> {msg.msg}</span>
                                                <span style={{ justifyContent: !msg.isResponse ? "end" : "start" }} className="time">{helpers.formatRelativeDate(msg.dateCreated)}</span>
                                            </div>
                                        </div>
                                    </S.ChatLine>
                                ))}

                            </S.ConversationsBox>

                            <S.Sender>
                                <S.InputText value={sendMessageInput} onChange={(e) => setSendMessageInput(e.target.value)} placeholder="Digite a mensagem aqui..." />
                                <S.SenderButton onClick={sendMessage}>
                                    <img alt="enviar" src="./send-icon.png" />
                                </S.SenderButton>
                            </S.Sender>
                        </>

                    </S.Conversation>
                </S.ChatsBox>
            </S.ChatContainer>
        </>
    )
}