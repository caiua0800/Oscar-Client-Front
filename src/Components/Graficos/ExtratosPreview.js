// SalesFunnel.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import RentableTransactionsTable from '../Tabelas/RentableContractsTable';
import ExtractsTable from '../Tabelas/ExtractsTable';


const FunnelContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: auto;
  padding: 20px 30px;
  border-radius: 10px;
  color: white;

  @media(max-width: 1000px){
    padding: 20px 20px;
    height: max-content;
  }
`;

const Stage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const BarContainer = styled.div`
  background: #555;
  border-radius: 5px;
  flex: 1;
  margin-left: 10px;
  position: relative;
`;

const Bar = styled.div`
  height: 30px;
  background: #f1c40f;
  border-radius: 5px;
  width: ${props => props.percent}%;
  position: relative;
  
  &::after {
    content: '${props => props.percent}%';
    position: absolute;
    left: 8px;
    top: 8px;
    color: white;
    text-shadow: 0 0 10px black;
  }
`;

const Value = styled.span`
  color: #f1c40f;
  min-width: 40px;
  text-align: right;
`;

const Title = styled.h1`
  text-align: center;
  color: #f1c40f;
  padding-bottom: 10px;

  @media(max-width: 1000px){
    font-size: 24px;
  }
`;

function ExtratosPreview() {


  return (
  
    <FunnelContainer>
      <Title>EXTRATOS DA CONTA</Title>
      <ExtractsTable />
    </FunnelContainer>
  );
}

export default ExtratosPreview;
