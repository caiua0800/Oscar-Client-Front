import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthContext';
import { helpers } from '../../Helpers/helpers';

const TableContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  color: white;
  box-sizing: border-box;
  width: 100%;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Select = styled.select`
  background-color: #444;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 2px solid #444;
  cursor: pointer;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: rgba(53, 56, 79, 1);
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #444;
  text-align: left;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #444;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const WithdrawalsTable = () => {
  const { clientData } = useContext(AuthContext);
  const [withdrawals, setWithdrawals] = useState([]);
  const [sortedDirection, setSortedDirection] = useState("asc");
  const [sortedBy, setSortedBy] = useState("dateCreated");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (clientData && clientData.walletExtract && clientData.walletExtract.withdrawals) {
      setWithdrawals(clientData.walletExtract.withdrawals);
    }
  }, [clientData]);

  const handleSort = (attribute) => {
    sortData(attribute, sortedDirection);
  };

  const handleDirectionChange = (direction) => {
    setSortedDirection(direction);
    sortData(sortedBy, direction);
  };

  const sortData = (attribute, direction) => {
    setSortedBy(attribute);
    const isAscending = direction === "asc";

    const sortedData = [...withdrawals].sort((a, b) => {
      let aValue = a[attribute];
      let bValue = b[attribute];

      // Comparar datas
      if (attribute === 'dateCreated') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      // Comparar valores numéricos
      else if (['amountWithdrawn'].includes(attribute)) {
        aValue = Number(aValue);
        bValue = Number(bValue);
      }

      if (aValue < bValue) return isAscending ? -1 : 1;
      if (aValue > bValue) return isAscending ? 1 : -1;
      return 0;
    });

    setWithdrawals(sortedData);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentData = withdrawals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(withdrawals.length / itemsPerPage);

  return (
    <TableContainer>
      <Title>Tabela de Saques</Title>
      <FilterContainer>
        <Select value={sortedDirection} onChange={(e) => handleDirectionChange(e.target.value)}>
          <option value="asc">Cresc.</option>
          <option value="desc">Decresc.</option>
        </Select>
        <Select value={sortedBy} onChange={(e) => handleSort(e.target.value)}>
          <option value="dateCreated">DATA</option>
          <option value="amountWithdrawn">VALOR</option>
          <option value="withdrawalId">ID SAQUE</option>
          {/* Adicione outros campos se necessário */}
        </Select>
      </FilterContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader onClick={() => handleSort("withdrawalId")}>ID SAQUE</TableHeader>
            <TableHeader onClick={() => handleSort("dateCreated")}>Data do Saque</TableHeader>
            <TableHeader onClick={() => handleSort("amountWithdrawn")}>Valor Retirado</TableHeader>
            <TableHeader onClick={() => handleSort("amountWithdrawn")}>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {currentData.map((withdrawal, index) => (
            <TableRow key={index}>
              <TableCell>{withdrawal.withdrawalId}</TableCell>
              <TableCell>{helpers.formatDateToBrazilianFormat(withdrawal.dateCreated)}</TableCell>
              <TableCell>R${helpers.formatToBrazilianCurrency(withdrawal.amountWithdrawn)}</TableCell>
              <TableCell style={{color: helpers.handleWithdrawnStatusColor(withdrawal.status)}}>{helpers.handleWithdrawnStatus(withdrawal.status)}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </Pagination>
    </TableContainer>
  );
};

export default WithdrawalsTable;