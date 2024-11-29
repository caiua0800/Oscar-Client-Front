import styled from "styled-components";

export const CadastroContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 50px;
    box-sizing: border-box;
    background-image: url("fundo-escuro.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;

    .Title{
        margin: 0;
        text-align: center;
        font-size: 38px;
        font-weight: 800;
        color: white;
        text-shadow: 3px 3px 2px rgba(0,0,0,0.6);
    }
`;

export const Padrao = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    label{
        color: white;
        font-size: 28px;
        margin-bottom: 10px;
    }

    select, input{
        cursor: pointer;
        width: 300px;
        height: 40px;
        border: 0;
        text-align: center;
        padding: 0;
        font-size: 18px;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8));
    }

    .contemIndicador{
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .prosseguir0{
        width: 300px;
        height: 40px;
        margin-top: 20px;
        border: 0;
        box-sizing: border-box;
        font-size: 16px;
        cursor: pointer;
        background: linear-gradient(to right, rgba(100, 190, 0, 1), rgba(100, 255, 0, 1));
    }
`;

export const CadastroFeito = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    box-sizing: border-box;
    padding: 30px 25px;
    top: 20px;
    right: 20px;
    border-radius: 12px;
    background: linear-gradient(to bottom, rgba(0, 180, 0, 1), rgba(50, 220, 0, 1));
    gap: 5px;
    h2, p{
        margin: 0;
    }

    h2{
        color: white;
        text-shadow: 2px 2px 1px rgba(0,0,0,0.4);
    }

    p{
        font-weight: 800;
        color: rgba(0,0,0,0.7);
    }
`;