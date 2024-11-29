import styled from "styled-components";

export const NavContainer = styled.div`
    width: 100%;
    height: max-content;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 10px;
    z-index: 10;
    box-shadow: 5px 5px 6px rgba(0,0,0,0.6);
    background: rgba(53, 60, 82, 1);
`;

export const Navbar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 5px 20px;
    justify-content: start;
    align-items: center;
    position: relative;
    // overflow: hidden;

    @media(max-width: 1100px){
        justify-content: center;
    }
`;

export const NavPartOne = styled.button`
    height: 100%;
    width: 60px;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0;
    background: linear-gradient(to right, rgba(150, 0, 0, 1), rgba(255, 0, 0, 1));
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    cursor: pointer;

    img{
        width: 80%;
        opacity: 0.6;
        // transform: scaleX(-1);
        transition: .3s;
;    }

    &:hover{
        background: linear-gradient(to right, rgba(150, 0, 0, 1), rgba(150, 0, 0, 1));

        img{
            opacity: 1;
            transform: scale(1.05);
        }
    }
`;

export const SearchResult = styled.div`
    width: 300px;
    box-sizing: border-box;
    height: 300px;
    background: #000000;
    border-radius: 0 0 15px 15px;
    position: absolute;
    top: 40px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 10px;

    p{
        margin: 0;
        font-size: 16px;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: .3s;

        &:hover{
            color: #90e0ef;
        }
    }
`;

export const NavPartTwo = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    select{
        cursor: pointer;

        padding: 0 20px;
        box-sizing: border-box;
        width: 300px;
        height: 40px;
        border-radius: 8px;
        background: linear-gradient(120deg, #1f1d1c, #000000, #000000, #1f1d1c);
        border: 2px solid transparent;
        color: #90e0ef;
        box-shadow: 4px 4px 2px rgba(0,0,0,0.4);
    }

    @media(max-width: 1100px){
        display: grid;
        grid-template-columns: 3fr 1fr;
        select{
            width: 200px;
        }
    }
`;


export const PerfilIcon = styled.div`
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 4px 4px 2px rgba(0,0,0,0.4);
    background: linear-gradient(120deg, #90e0ef, #90e0ef, #90e0ef, #90e0ef);
    border: 2px solid black;
    overflow: hidden;
    // padding: 3px;
    cursor: pointer;

    img{
        width: 100%;
        border-radius: 50%;
        
    }
`;

export const LogOutButton = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;

`;