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

  @media(max-width: 1000px){
    font-size: 18px;
  }
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

  @media(max-width: 1100px){
    font-size: 12px;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: rgba(53, 56, 79, 1);
  }

  @media(max-width: 1100px){
    font-size: 12px;
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

const ExtractsTable = () => {
    const { clientData, clientExtracts } = useContext(AuthContext);
    const [extracts, setExtracts] = useState([]);
    const [sortedDirection, setSortedDirection] = useState("asc");
    const [sortedBy, setSortedBy] = useState("purchaseDate");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        if (clientExtracts) {
            setExtracts(clientExtracts);
        }
    }, [clientExtracts]);

    const handleSort = (attribute) => {
        sortData(attribute, sortedDirection);
    };

    const handleDirectionChange = (direction) => {
        setSortedDirection(direction);
        sortData(sortedBy, direction);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const sortData = (attribute, direction) => {
        setSortedBy(attribute);
        const isAscending = direction === "asc";

        const sortedData = [...extracts].sort((a, b) => {
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

        setExtracts(sortedData);
    };

    const currentData = extracts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(extracts.length / itemsPerPage);

    const handleType = (str) => {
        if(str.trim().toLowerCase().includes("saque")){
            return "Saque"
        }else if(str.trim().toLowerCase().includes("compra")){
            return "Compra"
        }else if(str.trim().toLowerCase().includes("incremento")){
            return "Incremento"
        }else if(str.trim().toLowerCase().includes("devolução")){
            return "Devolução"
        }
        else if(str.trim().toLowerCase().includes("antecipação")){
            return "Antecipação";
        }
        return "Indefinido";
    }

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
                </Select>
            </FilterContainer>
            <Table>
                <thead>
                    <tr>
                        <TableHeader onClick={() => handleSort("purchaseId")}>ID</TableHeader>
                        <TableHeader onClick={() => handleSort("currentIncome")}>TIPO</TableHeader>
                        <TableHeader onClick={() => handleSort("status")}>DATA</TableHeader>
                        <TableHeader onClick={() => handleSort("status")}>VALOR</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((extract, index) => (
                        <TableRow key={index}>
                            <TableCell>{extract.extractId}</TableCell>
                            <TableCell>{handleType(extract.name)}</TableCell>
                            <TableCell>{helpers.formatDateToBrazilianFormat(extract.dateCreated)}</TableCell>
                            <TableCell>R${helpers.formatToBrazilianCurrency(extract.totalAmount)}</TableCell>
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

export default ExtractsTable;