import styled from "styled-components";


export const ProfileContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-color: rgba(0,0,0,0.7);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfileContent = styled.div`
    width: 80%;
    height: 70%;
    border-radius: 12px;
    background: rgba(0,0,0,1);
    border: 4px solid #0096c7;
    box-shadow: 6px 6px 4px #ade8f4;
    display: flex;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 1100px){
        flex-direction: column;
        overflow: auto;
        align-items: center;
    }
`;

export const ProfilePictureArea = styled.div`
    width: 50%;
    height: 100%;
    border-right: 4px solid #0096c7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    position: relative;

    h5{
        margin: 0;
        position: absolute;
        top: 0px;
        left: 0px;
        color: white;
        transition: .3s;
        cursor: pointer;
        font-size: 22px;
        
        &:hover{
            color: rgba(255, 50, 30, 1);
        }
    }

    span{
        color: white;
        cursor: pointer;
        transition: .3s;

        &:hover{
            color: #0096c7;
        }
    }

    .ProfilePictureBox{
        width: 80%;
        border-radius: 50%;
        border: 4px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img{
            width: 100%;
        }
    }

    @media (max-width: 1100px){
        width: 100%;
        gap: 20px;
        border-right: 0px solid rgba(0,0,0,0);
        border-bottom: 4px solid #0096c7;
        margin-bottom: 20px;
    }
`;

export const ProfileInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 20px;
    gap: 5px;
    color: white;

    h1{
        color: white;
        font-weight: 800;
        font-size: 32px;
        text-shadow: 2px 2px 6px #0096c7;
    }

    h6{
        margin: 0;
        font-weight: 500;
        font-size: 14px;
        color: white;
        width: 100%;
        text-align: end;
        transition: .3s;
        cursor: pointer;

        &:hover{
            color: #0096c7;
        }
    }

    @media (max-width: 1100px){
        padding: 0 0;

        h1{
            font-size: 28px;
            width: 100%;
            text-align: center;
        }
    }
`;

export const InfoBox = styled.div`
    width: 100%;
    display: flex;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.6);
    box-sizing: border-box;
    overflow: hidden;
    align-items: end;
    border-radius: 3px;
    
    span{
        height: 100%;
        width: 20%;
        border-right: 2px solid rgba(255, 255, 255, 0.6);
        color: rgba(255, 255, 255, 0.8);
        font-weight: 600;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
    }

    input{
        margin: 0;
        padding: 0;
        padding-left: 20px;
        width: 80%;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        border: 0;
        background: transparent;
        color: rgba(255, 255, 255, 0.8);
        font-weight: 600;
        font-size: 22px;
    }

    input::placeholder{
        color: rgba(255, 255, 255, 0.8);
    }

    @media (max-width: 1100px){
        flex-direction: column;
        height: max-content;
        width: 100%;
        align-items: start;
        border: 0;
        margin-top: 20px;

        span{
            border-right: 0;
            // border-bottom: 2px solid rgba(255, 255, 255, 0.8);
            width: 100%;
        }

        input{
            width: 100%;
            font-size: 16px;
            padding: 0;
            text-align: center;
            border: 2px solid white;
            height: 40px;
        }
    }
`;

// export const ProfileContent = styled.div``;

// export const ProfileContent = styled.div``;

// export const ProfileContent = styled.div``;
