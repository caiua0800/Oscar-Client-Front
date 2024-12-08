import styled from 'styled-components';

export const ContainerTitle = styled.div`
    width: 100%;
    font-size: 42px;
    font-weight: 800;
    color: #000026;
    transition: .5s;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-shadow: 4px 4px 2px rgba(0,0,0,0.2);

    @media (max-width: 1000px){
        p{
            font-size: 28px;
        }
    }
`;

export const Nav = styled.div`
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 10px;
    background-color: rgba(53, 60, 82, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p{
        font-size: 32px;
        color: rgba(0, 150, 255, 1);
        filter: drop-shadow(0 0 10px rgba(0, 150, 255, 0.4))
    }

    input{
        cursor: pointer;
        padding: 0 20px;
        box-sizing: border-box;
        width: 450px;
        height: 40px;
        border-radius: 8px;
        background: linear-gradient(120deg, #1f1d1c, #000000, #000000, #1f1d1c);
        border: 2px solid transparent;
        color:  rgba(0, 150, 255, 1);
        box-shadow: 4px 4px 2px rgba(0,0,0,0.4);
        filter: drop-shadow(0 0 10px rgba(0, 150, 255, 0.2));
    }

    input::placeholder{
        opacity: 1;
        color: rgba(0, 150, 255, 1);
    }
`;

export const RowOne = styled.div` 
    width: 100%;
    display: grid;
    grid-template-columns: ${({ noticiasAtivas }) => (noticiasAtivas ? '2fr 1fr' : '10fr 1fr')};
    gap: 20px;
    height: 450px;
    box-sizing: border-box;
    transition: .8s;
    overflow: auto;
    
    .GrapthContainer {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: radial-gradient(rgba(53, 56, 79, 1), rgba(39, 42, 59, 1));
    }

    .NewsContainer{
        width: 100%;
        background: radial-gradient(rgba(39, 42, 59, 1), rgba(39, 42, 59, 1));
    }

    @media (max-width: 1100px){
        grid-template-columns: 1fr;
        grid-template-rows: max-content  max-content;
        height: max-content;

        .GrapthContainer{
            // overflow: auto;
            min-width: max-content;
        }

        .NewsContainer{
            min-height: 400px;
        }
    }
`;

export const RowTwo = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    gap: 20px;
    // height: 240px;
    box-sizing: border-box;
    position: relative;

    .Box{
        width: 100%;
        background-color: rgba(53, 56, 79, 1);
        display: grid;
        grid-template-rows: 1fr 2fr 1fr;
        padding: 10px;
        height: max-content;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;

        .header{
            display: grid;
            grid-template-columns: 5fr 1fr;
            color: white;
            font-size: 18px;
            // align-items: center;

            img{
                width: 20px;
                margin-left: 20px;
                cursor: pointer;
            }
        }

        .body{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .brlValue{
                color: white;
                font-size: 3em;
                filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7));
            }

            .usdValue{
                color: rgba(255, 255, 255, 0.3);
                font-size: 2em;

            }
        }

        .englishName{
            width: 100%;
            display: flex;
            justify-content: start;
            align-items: end;
            color: rgba(255, 255, 255, 0.4);
        }

        .increase-arrow{
            position: absolute;
            top: 55%;
            left: 20px;
            width: 40px;
            height: 50px;
            opacity: 0.5;
            cursor: pointer;
            transition: .3s;
            filter: drop-shadow(0 0 5px rgba(100, 255, 10, 0.8));

            &:hover{
                opacity: 1;
            }
        }
    }

    @media (max-width: 1100px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr
    }

    @media (max-width: 600px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }
`;

export const RowThree = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 20px;
    // margin-top: 40px;
    // height: 400px;
    box-sizing: border-box;

    .Box{
        width: 100%;
        height: max-content;
        overflow: auto;
        background: radial-gradient(rgba(53, 62, 83, 1), rgba(39, 42, 59, 1));
        position: relative;
        

        span{
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(255, 255, 255, 0.4);
            cursor: pointer;
            transition: .3s;

            &:hover{
                color: white;
            }
        }

        img{
            position: absolute;
            width: 20px;
            right: 20px;
            top: 20px;
            cursor: pointer;
        }
    }

    @media (max-width: 1100px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;

    }
`;

export const RowFour = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 300px;
    box-sizing: border-box;
    margin-top: 100px;

    .tableType{
        width: 200px;
        height: 30px;
        margin: 0;
        background: rgba(60, 60, 60, 1);
        color: white;
        border: 0;
        border-radius: 6px;
        margin-left: 20px;
    }

    .TableContainer{
        width: 100%;
        height: 100%;
        display: flex;
        box-sizing: border-box;
        overflow: auto;
    }
`;

export const FirstRowBox = styled.div`
    width: 100%;
    height: 350px;
    border-radius: 20px;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px;
    position: relative;

    h1{
        font-size: 22px;
        margin: 0;
        color: rgba(0,0,0,0.7);
    }

    @media (max-width: 1000px){
        height: max-content;
        h1{
            font-size: 18px;
            color: black;
            font-weight: 500;
            text-shadow: 2px 2px 1px rgba(255, 255, 255, 0.3);
        }
    }

`;

export const ContratosAtivos = styled(FirstRowBox)`

    // background: linear-gradient(-60deg, #3d4763, #3288be, #31d0e3);
    background: linear-gradient(-60deg, #B17D2A, #B17D2A, #B17D2A, #E6AA11, #B17D2A, #B17D2A);
    span{
        margin-top: 20px;
        font-size: 72px;
        font-weight: 800;
        transition: .3s;
        cursor: pointer;
        
        &:hover{
            color: #B17D2A;
            text-shadow: 2px 2px 1px rgba(0,0,0,0.3);
        }
    }

    @media (max-width: 1000px){
        span{
            margin-top: 0;
            font-size: 32px;
        }
    }
`;

export const SaldoCorrente = styled(FirstRowBox)`
    
    background: linear-gradient(-60deg, #000000, #2b2d2e, #000000, #2b2d2e, #000000);

`;

export const SaldoNaPlataforma = styled.div`
    whith: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        margin: 0;
        color: #FFFFFF;
    }

    span{
        margin-top: 10px;
        color: white;
        font-size: 38px;
        text-shadow: 2px 2px 1px rgba(0,0,0,0.4);
        font-weight: 800;
    }

    @media (max-width: 1000px){
        h2{
            margin: 0;
            font-size: 22px;
            font-weight: 500;
            text-shadow: 2px 2px 1px rgba(255, 255, 255, 0.2);
        }

        span{
            margin-top: 0;
            font-size: 26px;
        }
    }
    
`;

export const SaldoPlataformaDivs = styled.div`

    width: 100%;
    display: flex;
    gap: 20px;
    margin-top: 30px;
    justify-content: space-between;

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3{
            width: max-content;
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            color: #1e96fc;
            text-shadow: 1px 1px 1px rgba(0, 0, 0,0.4);
            transition: .3s;

            &:hover{
                color: white;
                transform: scale(1.05);
            }
        }

        span{
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            text-shadow: 2px 2px 1px rgba(0,0,0,0.4);
            color: white;
        }
    }

    @media (max-width: 1000px){
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;

        div{
            h3{
                font-size: 16px;
                color: rgba(10, 70, 255, 1);
            }

            span{
                font-size: 16px;
            }
        }
    }
`;


export const ProgressBar = styled.div`
    position: absolute;
    bottom: 10px;
    left: 20px; 
    right: 20px;
    height: 10px;
    background-color: #ffff; 
    border: 1px solid rgba(0,0,0,0.2);
    overflow: hidden;
    box-shadow: 3px 3px 2px rgba(0,0,0,0.2)
`;

export const ProgressFill = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: rgba(99, 253, 15, 0.8);
    transition: width 4s ease;
`;

export const PercentageCount = styled.div`
    position: absolute;
    bottom: 25px;
    left: 25px;
    color: white;
    cursor: pointer;
    width: 60px;
    text-align: center;
    border-radius: 20px;
    font-weight: 600;
    padding: 2px;
    background-color: rgba(99, 253, 15, 0.8);
    border: 1px solid rgba(0,0,0,0.1);

    @media (max-width: 1000px){
        width: 60px;
        font-size: 12px;
        color: black;
    }
`;

export const SecondRow = styled.div`
    width: 100%;
    height: max-content;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 40px;

    h1 {
        text-align: center;
        margin: 0;
        color: #000000;
        text-shadow: 1px 1px 5px rgba(0,0,0,0.1)
    }

    @media (max-width: 1000px) {
        flex-direction: column;
        margin-top: 20px;

        h1{
            font-size: 18px;
            text-shadow: 1px 2px 1px rgba(0,0,0,0.4);
        }
    }
`;

export const SaldoDisponivelParaSaque = styled.div`
    position: relative;

    @media(max-width: 1000px){
        margin-top: 10px;
    }
`;

export const IndiqueEGanha = styled.div`
    width: 100%;
    padding: 20px;
    box-shadow: 2px 3px 6px rgba(0,0,0,0.67);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;

    p{
        color: #3288be;
        margin: 0;
        text-align: center;
    }

    span{
        color: #31d0e3;
        cursor: pointer;

        &:hover{
            font-weight: 800;
        }
    }

    &:hover{
        p{
            color: #fff;
        }
        background-color: #3288be;
        transform: scale(1.03);
    }

    @media (max-width: 1000px){
        background: linear-gradient(-60deg, #B17D2A, #B17D2A, #E6AA3A, #B17D2A, #B17D2A);

        p{
            color: #000000;
            font-weight: 500;
        }

        span{
            color: #FFFFFF;
            cursor: pointer;
        }
    }
`;


export const ThirdRow = styled.div`
    margin-top: 40px;
    text-align: center;
    h2{
        margin: 0;
        font-size: 28px;
        color: #72ce27;
        text-shadow: 2px 2px 1px rgba(0,0,0,0.6);
    }
`;

export const TabelaContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px 30px;
    overflow-y: scroll;
    max-height: 400px;

`;


export const GrapthContainer = styled.div`
    width: 100%;
    height: 450px;
    box-shadow: 3px 3px 4px rgba(0,0,0,0.4);

    @media(max-width: 1000px){
        height: 300px;
        width: 100%;

    }
`;

export const IndicadosContainer = styled.div`
    width: 100%;
    min-width: 800px;
    display: flex;
    padding: 80px 50px 50px 50px;
    box-sizing: border-box;
    flex-direciton: column;
    gap: 50px;
    max-height: 450px;
    overflow: auto;
    flex-direction: column;
    box-shadow: 0px 0px 6px rgba(0,0,0,0.4);
    background: white;
    position: relative;

    @media(max-width: 1000px){
        height: 300px;
        width: 100%;

    }
`;

export const Indicado = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    .info{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 10px;

        img{
            width: 20px;
            height: 20px;
        }

        span{
            color: black;
            font-weight: 800;
            font-size: 18px;
        }

        h6{
            margin: 0;
            font-size: 18px;
            color: red;
        }

        .ativo{
            color: green;
        }
    }
    
`;

export const Justing = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const TableColumns = styled.div`
    width: 100%;
    position: absolute;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 15px 50px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    border-bottom: 3px solid black;
    color: black;
    gap: 20px;
    span{
        font-weight: 800;
        font-size: 22px;
    }
`;

export const WrapIt = styled.div`
    width: 100%;
    max-height: 450px;
    overflow: auto;
    box-shadow: 4px 4px 2px rgba(0,0,0,0.4);

`;