import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    z-index: 10;
`;

export const ModalContentBox = styled.div`
    width: 400px;
    border-radius: 6px;
    background: linear-gradient(-45deg, #00141f, #001824, #00141f);
    box-sizing: border-box;
    padding: 30px 20px;
    position: relative;
`;

export const BackButton = styled.div`
    position: absolute;
    top: 5px;
    left: 5px;

    img{
        width: 30px;
        cursor: pointer;
    }
`;

export const ModalTitle = styled.h1`
    margin: 0;
    font-size: 32px;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    text-shadow: 2px 2px 1px rgba(0,0,0,0.4);
    gap: 5px;

    img{
        width: 40px;
    }
`;

export const DisponivelSaque = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    p{
        margin: 0;
        font-size: 26px;
        color: white;
        text-shadow: 2px 2px 1px rgba(0,0,0,0.4);
    }

    span{
        font-size: 22px;
        font-weight: 600;
        cursor: pointer;
        transition: .3s;
    }
`;

export const SelecioneValor = styled.div`
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin: 0;
        font-size: 22px;
        color: white;
        text-shadow: 2px 2px 1px rgba(0,0,0,0.4);
    }

    .inputBox{
        width: 100%;
        display: grid;
        grid-template-columns: 4fr 1fr;
        align-items: center;
        margin-top: 5px;

        input{
            width: 100%;
            box-sizing: border-box;
            height: 35px;
            font-size: 16px;
            font-weight: 800;
        }

        button{
            width: 100%;
            box-sizing: border-box;
            height: 35px;
            cursor: pointer;
        }
    }

    .Aviso{
        margin-top: 5px;
        color: rgba(200, 280, 0, 0.8);
        font-size: 12px;
    }
`;

export const BotaoSaque = styled.button`
    width: 100%;
    height: 35px;
    margin-top: 10px;
    border: 0;
    background: linear-gradient(to right, rgba(0, 200, 0, 1), rgba(100, 220, 0, 1));
    cursor: pointer;
`;

// export const ModalTitle = styled.div``;
