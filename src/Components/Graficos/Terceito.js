import React, { useState, useEffect, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthContext';
import { helpers } from '../../Helpers/helpers';
import RentableTransactionsTable from '../Tabelas/RentableContractsTable';

const ChartContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  margin: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  color: white;
  text-align: left;
`;

function Terceiro() {
  const { clientData } = useContext(AuthContext);
  const [ganhos5Meses, setGanhos5Meses] = useState([]);

  useEffect(() => {
    if (clientData && clientData.purchases && clientData.purchases.length > 0) {
      const ganhos = helpers.calculateEarnings(clientData.purchases);
      
      // Formata o array para ser compatível com Recharts
      const formattedData = ganhos.map((valor, index) => {
        const date = new Date();
        date.setMonth(date.getMonth() - (4 - index));
        const monthName = date.toLocaleString('pt-BR', { month: 'short' });
        return { name: monthName, uv: valor };
      });

      setGanhos5Meses(formattedData);
    }
  }, [clientData]);

  return (
    <ChartContainer>
      <Title>GANHOS AO DECORRER DO TEMPO</Title>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ganhos5Meses}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#00b894" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default Terceiro;
