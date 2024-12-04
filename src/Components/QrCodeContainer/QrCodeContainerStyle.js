import styled from "styled-components";

export const QrCodeContent = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.9);
    z-index: 99;
`;

export const BoxQrContent = styled.div`
    width: max-content;
    height: max-content;
    box-sizing: border-box;
    padding: 40px 50px;
    border-radius: 6px;
    position: relative;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 1), rgba(0, 0, 130, 1));

    .exit{
        position: absolute;
        top: 10px;
        right: 20px;
        color: rgba(255, 0, 0, 0.9);
        font-size: 28px;
        font-weight: 800;
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 32px;
    color: white;
    transition: .3s;
    text-align: center;
    
    &:hover{
        transform: translateX(5px);
    }
`;

export const QrCodeBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    .qrBox{
        width: 300px;
        height: 300px;
        border: 4px solid white;
    }
`;

export const CancelarArea = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .ask{
        font-size: 28px;
        color: white;
    }

    .confirmationDiv{
        display: flex;
        gap: 5px;
        .boxConfirmCancel{
            width: 300px;
            height: 35px;
            box-sizing: border-box;
            padding-left: 20px;
        }

        .buttonConfirm{
            width: 140px;
            height: 35px;
            box-sizing: border-box;
            cursor: pointer;
        }
    }

`;

export const Valor = styled.div`
    margin-top: 20px;
    font-size: 32px;
    color: rgba(100, 255, 0, 1);
    text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
    width: 100%;
    text-align: center;
    flex-direction: column;
    display: flex;
    align-items: center;
`;

export const Verificar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    button{
        width: max-content;
        height: 35px;
        font-size: 18px;
        cursor: pointer;
    }
`;

// export const nome = styled.div``;
