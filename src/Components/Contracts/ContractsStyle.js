import styled from "styled-components";

export const ContratosContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    min-height: 100vh;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 42px;
    color: white;
    text-shadow: 3px 3px 1px rgba(0,0,0,0.4);
`;

export const ProductsContainerArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    h2{
        margin: 0;
        font-size: 28px;
        color: white;
        text-shadow: 3px 3px 1px rgba(0,0,0,0.4);
    }
`;

export const ProductsList = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 20px;
    padding: 0 40px;
    box-sizing: border-box;
`;

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

export const SimulacaoContainer = styled.div`
    width: 100%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;

    .title{
        margin: 0;
        color: white;
        font-size: 32px;
        text-shadow: 4px 4px 1px rgba(0,0,0,0.4);
    }

    button{
        margin-top: 10px;
        height: 40px;
        width: 100%;
        background: linear-gradient(to bottom, rgba(0, 180, 0, 1), rgba(0, 240, 0, 1));
        cursor: pointer;
        border: 0;
        box-sizing: border-box;
        font-size: 18px;
        font-weight: 600;
        box-shadow: 4px 4px 1px rgba(0,0,0,0.4);
        transition: .3s;

        &:hover{
            transform: scale(0.99);
            box-shadow: 10px 10px 1px rgba(0,0,0,0.4);
        }
    }
`;

export const Simulacao = styled.div`
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    .boxes{
        display: grid;
        grid-template-columns: 3fr 1fr;
        background: black;
        box-sizing: border-box;
        padding: 5px;
        gap: 5px;

        .itemBox{
            width: 100%;
            height: 40px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 18px;
            color: black;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(200, 200, 200, 1));

            input, select{
                border: 0;
                background: transparent;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                padding-left: 20px;
                font-size: 22px;
            }
        }
    }


`;

// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;

