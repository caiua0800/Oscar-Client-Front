import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [clientData, setClientData] = useState(null);
    const GET_CLIENT_DATA_ROUTE = process.env.REACT_APP_BASE_ROUTE + process.env.REACT_APP_CLIENT_DATAILS;
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const storedToken = sessionStorage.getItem('authToken');
        const storedId = sessionStorage.getItem('userId');
        if (storedToken && storedId) {
            setToken(storedToken);
            fetchClientData(storedToken, storedId).finally(() => setIsInitialized(true));
        } else {
            setIsInitialized(true);
        }
    }, []);

    const fetchClientData = async (token, id) => {
        try {
            const response = await axios.get(`${GET_CLIENT_DATA_ROUTE}${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const Client = response.data.client;

            var totalInvestimento = Client.blockedBalance;
            var lucroTotalObtido = 0;
            var lucroAReceber = 0;

            Client.walletExtract.purchases.forEach(purchase => {
                if (purchase.status === 2) {
                    lucroTotalObtido += parseFloat(purchase.currentIncome);
                    lucroAReceber += parseFloat(purchase.finalIncome) - parseFloat(purchase.currentIncome);
                }
            });

            var totalJaSacado = 0;

            Client.walletExtract.withdrawals.forEach(withdrawal => {
                if (withdrawal.status === 1 || withdrawal.status === 2) {
                    totalJaSacado += withdrawal.amountWithdrawn;
                }
            });

            const returnClient = {
                ...response.data.client,
                totalInvestimento,
                lucroTotalObtido,
                lucroAReceber,
                totalJaSacado
            };

            setClientData(returnClient);
        } catch (error) {
            console.error("Erro ao buscar dados do cliente:", error);
        }
    };

    // Nova função para atualizar os dados do cliente
    const refreshClientData = async () => {
        if (token) {
            const storedId = sessionStorage.getItem('userId');
            if (storedId) {
                await fetchClientData(token, storedId);
            }
        }
    };

    const login = async (cpf, password) => {
        try {
            const response = await axios.post(process.env.REACT_APP_BASE_ROUTE + process.env.REACT_APP_AUTH_TOKEN, {
                id: cpf, // Assumindo que o CPF é usado como ID
                password
            });
            const receivedToken = response.data.token;
            setToken(receivedToken);
            sessionStorage.setItem('authToken', receivedToken);
            sessionStorage.setItem('userId', cpf);
            await fetchClientData(receivedToken, cpf);
            return true;
        } catch (error) {
            console.error("Erro ao logar:", error);
            setToken(null);
            return false; // Indica falha no login
        }
    };

    const logout = () => {
        setToken(null);
        setClientData(null);
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userId');
    };

    return (
        <AuthContext.Provider value={{ token, clientData, login, logout, isInitialized, refreshClientData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;