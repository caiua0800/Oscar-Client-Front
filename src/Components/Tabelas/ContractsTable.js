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
const TransactionsTable = () => {
  const { clientData } = useContext(AuthContext);
  const [contratos, setContratos] = useState([]);
  const [sortedDirection, setSortedDirection] = useState("asc");
  const [sortedBy, setSortedBy] = useState("purchaseDate");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (clientData && clientData.walletExtract && clientData.walletExtract.purchases) {
      setContratos(clientData.walletExtract.purchases);
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

    const sortedData = [...contratos].sort((a, b) => {
      let aValue = a[attribute];
      let bValue = b[attribute];

      // Comparar datas
      if (attribute === 'purchaseDate') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      // Comparar valores numéricos
      else if (['totalPrice', 'currentIncome'].includes(attribute)) {
        aValue = Number(aValue);
        bValue = Number(bValue);
      }

      if (aValue < bValue) return isAscending ? -1 : 1;
      if (aValue > bValue) return isAscending ? 1 : -1;
      return 0;
    });

    setContratos(sortedData);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentData = contratos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(contratos.length / itemsPerPage);

  return (
    <TableContainer>
      <Title>Tabela de Contratos</Title>
      <FilterContainer>
        <Select value={sortedDirection} onChange={(e) => handleDirectionChange(e.target.value)}>
          <option value="asc">Cresc.</option>
          <option value="desc">Decresc.</option>
        </Select>
        <Select value={sortedBy} onChange={(e) => handleSort(e.target.value)}>
          <option value="purchaseDate">DATA</option>
          <option value="totalPrice">VALOR TOTAL</option>
          <option value="currentIncome">LUCRO OBTIDO</option>
          <option value="purchaseId">ID COMPRA</option>
          {/* Adicione outros campos se necessário */}
        </Select>
      </FilterContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader onClick={() => handleSort("purchaseId")}>ID COMPRA</TableHeader>
            <TableHeader onClick={() => handleSort("purchaseDate")}>Data da Compra</TableHeader>
            <TableHeader onClick={() => handleSort("totalPrice")}>Total Investido</TableHeader>
            <TableHeader onClick={() => handleSort("currentIncome")}>Lucro Obtido</TableHeader>
            <TableHeader onClick={() => handleSort("status")}>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {currentData.map((contrato, index) => (
            <TableRow key={index}>
              <TableCell>{contrato.purchaseId}</TableCell>
              <TableCell>{helpers.formatDateToBrazilianFormat(contrato.purchaseDate)}</TableCell>
              <TableCell>R${helpers.formatToBrazilianCurrency(contrato.totalPrice)}</TableCell>
              <TableCell>R${helpers.formatToBrazilianCurrency(contrato.currentIncome)}</TableCell>
              <TableCell>{helpers.handlePurchaseStatus(contrato.status)}</TableCell>
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

export default TransactionsTable;