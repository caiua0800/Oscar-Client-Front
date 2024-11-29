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
    width: 100%;
    height: 100vh;
    overflow: auto;
    border-radius: 6px;
    background: linear-gradient(-45deg, #00141f, #001824, #00141f);
    box-sizing: border-box;
    padding: 80px 20px 30px 20px;
    position: relative;
`;

export const CloseButton = styled.div`
    position: absolute;
    z-index: 99;
    top: 15px;
    left: 15px;

    img{
        width: 40px;
        cursor: pointer;
        transition: .3s;

        &:hover{
            transform: scale(0.9);
        }
    }
`

export const ModalTitle = styled.h1`
    width: 100%;
    margin: 0;
    font-size: 48px;
    color: white;
    text-shadow: 4px 4xp 1px rgba(0,0,0,0.4);
`

export const SelectedContractPart = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Card = styled.div`
    width: 300px;
    box-sizing: border-box;
    border-radius: 6px;
    background: linear-gradient(-45deg, rgba(255, 255, 255, 1), rgba(200, 100, 0, 1));
    box-shadow: 8px 8px 1px rgba(0,0,0,0.4);
    padding: 20px 15px;

    .title{
        margin: 0;
        width: 100%;
        font-size: 22px;
        color: black;
        font-weight: 600;
        text-align: center;
        justify-content: center;
        display: flex;
        gap: 5px;

        img{
            width: 30px;
        }
    }

    .productImage{
        width: 100%;
        height: 200px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        img{
            width: 80%;
            height: 80%;
            border-radius: 6px;
            opacity: 0.9
        }
    }

    .infoContract{
        width: 100%;
        margin-top: 0px;
        display: flex;
        flex-direction: column;
        align-items: start;

        .info{
            font-size: 16px;
            font-weight: 800;
        }
    }

    .valorUnitario{
        width: 100%;
        display: flex;
        justify-content: center;
        .valor{
            font-size: 32px;
            font-weight: 800;
            text-decoration: underline;
            color: rgba(0, 0, 0, 1);
            // text-shadow: 2px 2px 1px rgba(0,0,0,1);
        }
    }

    .selecionarBtn{
        margin-top: 20px;
        width: 100%;
        height: 30px;
        background: linear-gradient(to bottom, rgba(0, 180, 0, 1), rgba(0, 230, 0, 1));
        border-radius: 6px;
        border: 0;
        box-shadow: 4px 4px 1px rgba(0,0,0,0.4);
        cursor: pointer;
        transition: .3s;

        &:hover{
            transform: scale(0.95);
            box-shadow: 6px 6px 1px rgba(0,0,0,0.4);
        }
    }
`;

export const QuantitySelector = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 20px;
    width: 100%;
    justify-content: center;

    .incrementor{
        width: 50px;
        height: 60px;
        border: 0;
        cursor: pointer;
        font-size: 16px;
        font-weight: 800;
        box-shadow: 4px 4px 1px rgba(0,0,0,0.4);
        transition: .3s;

        &:hover{
            transform: scale(0.97);
            box-shadow: 8px 8px 1px rgba(0,0,0,0.4);
        }
    }

    .view{
        width: 80px;
        height: 60px;
        font-size: 16px;
        font-weight: 800;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(220, 220, 220, 1));
        color: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
    }
`

export const TableInvestiment = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    box-sizing: border-box;
    gap: 2px;
`

export const Colunas = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 2px;
`
export const Linhas = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 2px;
`

export const Item = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 35px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(200, 200, 200, 1));
    // border: 2px solid black;
    justify-content: center;
`

export const BotaoProsseguir = styled.button`
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .3s;
    box-shadow: 4px 4px 1px rgba(0,0,0,0.4);
    background: linear-gradient(to bottom, rgba(0, 180, 0, 1), rgba(0, 240, 0, 1));
    margin-top: 20px;
    font-size: 18px;

    &:hover{
        transform: scale(0.97);
        box-shadow: 8px 8px 1px rgba(0,0,0,0.4);
    }
`

export const ContratoGeradoConteiner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    .inform{
        margin: 0;
        color: white;
    }
`

export const MostrandoContrato = styled.div`
    width: 500px;
    max-width: 90%; /* Responsividade em telas menores */
    background: white;
    margin-top: 10px;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid #000; /* Borda para demarcar o contrato */
    font-family: Arial, sans-serif; /* Fonte consistente */
    color: #333; /* Cor do texto */
`;

export const EuConcordo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    span{
        color: white;
        font-size: 16px;
    }

    input{
        cursor: pointer;
    }
`

export const FinalInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 5px;
    span{
        font-size: 18px;
        color: white;
        font-weight: 600;
    }

    select{
        width: 400px;
        height: 40px;
        background: linear-gradient(to bottom, rgba(0, 40, 100, 1), rgba(0, 50, 120, 1));
        border: 0;
        color: white;
        box-sizing: border-box;
        padding-left: 20px;
        font-size: 18px;
        cursor: pointer;
    }

    button{
        width: 400px;
        height: 40px;
        background: linear-gradient(to bottom, rgba(0, 160, 0, 1), rgba(0, 220, 0, 1));
        border: 0;
        font-size: 18px;
        color: black;
        cursor: pointer;
    }
`

// export const MostrandoContrato = styled.div``

// export const MostrandoContrato = styled.div``

// export const MostrandoContrato = styled.div``
