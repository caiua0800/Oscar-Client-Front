import styled from "styled-components";


export const NoticiasContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background-color: black;
`;

export const Noticia = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
`;

export const NoticiaHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 0 20px;

    box-sizing: border-box;
    span{
        font-size: 22px;
        color: rgba(255, 255, 255, 0.6);

    }

    .img-box{
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100%;
            cursor: pointer;
        }
    }
`;

export const NoticiaDate = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.6);
    padding: 0 20px;
    box-sizing: border-box;
    color:  ${({ A }) => (A ? 'white' : 'rgba(0,0,0,0)')};
    transition: 1s;
`;

export const NoticiaTitle = styled.div`
    margin-top: 20px;
    width: 100%;
    text-align: start;
    font-size: 1.8em;
    color: white;
    padding: 0 20px;
    box-sizing: border-box;
    transition: 1s;

    color:  ${({ A }) => (A ? 'white' : 'rgba(0,0,0,0)')};
`;

export const NoticiaImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    overflow: hidden;
    margin-top: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
    display:  ${({ A }) => (A ? 'flex' : 'none')};

    img{
        width: 100%;
        height: 300px;
    }
`;

// export const NoticiasContainer = styled.div``;
