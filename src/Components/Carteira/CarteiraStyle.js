import styled from "styled-components";

export const CarteiraContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    min-height: 100vh;
`;

export const Cartao = styled.div`
    width: 450px;
    height: 250px;
    border-radius: 12px;
    background: linear-gradient(60deg, rgba(0,0,0,1), rgba(25,25,25,1), rgba(20,20,20,1));
    margin-top: 20px;
    border: 6px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: end;
    box-sizing: border-box;
    padding: 10px 20px;
    position: relative;
    overflow: hidden;

    .logotipo-cartao{
        width: 80px;
        filter: drop-shadow(0 0 10px rgba(0, 100, 255, 0.4));
        position: absolute;
        top: 5px;
        left: 5px;
    }

    .cartao-circle{
        width: 150px;
        position: absolute;
        top: -60px;
        right: -60px;
        height: 150px;
        border-radius: 50%;
        background: rgba(50, 50, 50, 1);
        display: flex;
        align-items: center;
        justify-content: center;

        .circle-intern{
            width: 70%;
            height: 70%;
            border-radius: 50%;
            background: rgba(20, 20, 20, 1);
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
        }
    }
`;

export const CardHolder = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    .cardHolderName{
        margin: 0;
        font-size: 22px;
        color: rgba(255, 255, 255, 0.8);
        font-weight: 800;
        letter-spacing: 5px;
    }

    .cardHolderNum{
        width: 100%;
        margin: 0;
        margin-top: 5px;
        font-size: 20px;
        color: rgba(0, 200, 255, 0.8);
        font-weight: 800;
        letter-spacing: 5px; 
    }

    .securityInfo{
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;

        .inf{
            display: flex;
            flex-direction: column;
            align-items: start;
            color: white;
            gap: 0;
            width: 100%;

            .lab, .labR{
                text-align: center;
            }

            .lab{
                color: rgba(255, 255, 255, 1);
            }

            .labR{
                color: rgba(255, 255, 255, 0.6);
            }
        }
    }
`;

export const GenerateCard = styled.button`
    width: 450px;
    height: 40px;
    margin-top: 20px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 0px solid rgba(0, 100, 0, 0);
    background: linear-gradient(to right, rgba(0, 180, 0, 1), rgba(0, 255, 0, 1));
    transition: .3s;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    text-shadow: 2px 2px 1px rgba(0,0,0,0.2);

    &:hover{
        border: 2px solid rgba(0, 100, 0, 1);
        transform: scale(0.97);
    }
`;

export const RowOne = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const RowOneItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const TableStrange = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TitleItem = styled.h1`
    margin: 0;
    font-size: 20px;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background: rgba(0,0,0,0.6);
    box-shadow: 2px 2px 1px rgba(0,0,0,0.4);
`

export const ItemsRow = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;

    .item{
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr;
        height: 60px;
        flex-direction: column;
        background: rgba(0,0,0,0.6);
        box-shadow: 2px 2px 1px rgba(0,0,0,0.4);
        box-sizing: border-box;
        padding: 10px 30px;

        .itemTitle{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
            font-weight: 800;
            height: 100%;
            border-bottom: 2px solid rgba(220, 220, 220, 0.8);
        }

        .itemVals{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 100%;
            box-sizing: border-box;

            .inf{
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
                font-size: 12px;
                color: rgba(255, 255, 255, 0.8);
                font-weight: 800;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                height: 100%;
            }
        }
    }
`;

export const RowTwo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;