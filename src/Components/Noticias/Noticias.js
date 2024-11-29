import React from "react";
import * as S from "./NoticiasStyle"


export default function Noticias({setA, A}) {


    return (
        <S.NoticiasContainer>
            <Noticia setA={setA} A={A}/>
        </S.NoticiasContainer>
    )
}


function Noticia({ setA, A }) {

    return (
        <S.Noticia>
            <S.NoticiaHeader>
                <span A={A}>Evento em breve</span>
                <div className="img-box">
                    <img alt="turn on" src="turnOn-icon.png" onClick={() => setA(!A)} />
                </div>
            </S.NoticiaHeader>
            <S.NoticiaDate A={A}>
                22 de Outubro, 2024 20:00
            </S.NoticiaDate>

            <S.NoticiaTitle A={A}>
                BILLIONARE MARKET, Acontece em São Paulo, Maior palestra internacional da história
            </S.NoticiaTitle>

            <S.NoticiaImage A={A}>
                <img alt="imagem da notícia" src="coworking-image.avif" />
            </S.NoticiaImage>
        </S.Noticia>
    )
}