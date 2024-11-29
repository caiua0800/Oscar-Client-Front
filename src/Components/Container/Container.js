import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile"


export default function ContainerGeneral({ children }) {
    const [showProfile, setShowProfile] = useState(false);

    const handleClose = () => { setShowProfile(false) }

    return (
        <Container>
            {showProfile && <Profile handleClose={handleClose} />}
            <Navbar setShowProfile={setShowProfile} showProfile={showProfile} />
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 100px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    font-family: Fonte1, sans-serif;
    gap: 20px;

    background: rgba(29, 29, 47, 1);

    h1,h2,h3,h4,h5,h6,p, input, select{
        margin: 0;

        box-sizing: border-box;
    }


    @media (max-width: 1000px){
        padding: 100px 20px;
    }
`;