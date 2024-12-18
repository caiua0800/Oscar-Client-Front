import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useLoad } from './LoadContext';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [clientData, setClientData] = useState(null);
    const [clientExtracts, setClientExtracts] = useState(null);
    const GET_CLIENT_DATA_ROUTE = process.env.REACT_APP_BASE_ROUTE + process.env.REACT_APP_CLIENT_DATAILS;
    const GET_CLIENT_EXTRACTS_ROUTE = process.env.REACT_APP_BASE_ROUTE + "extract/client/";
    const [isInitialized, setIsInitialized] = useState(false);
    const [modeloDeContratos, setModeloDeContratos] = useState([]);
    const { startLoading, stopLoading, stopLoadingDelay } = useLoad();

    useEffect(() => {
        const storedToken = sessionStorage.getItem('authToken');
        const storedId = sessionStorage.getItem('userId');
        
        if (storedToken && storedId) {
            setToken(storedToken);
            fetchClientData(storedToken, storedId)
                .then(() => obterModeloDeContratos(storedToken))
                .finally(() => setIsInitialized(true));
        } else {
            setIsInitialized(true);
        }
    }, []);

    const fetchClientData = async (token, id) => {
        startLoading()
        try {
            const response = await axios.get(`${GET_CLIENT_DATA_ROUTE}${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            await obterExtratos(token, id)
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
            stopLoadingDelay();
            setClientData(returnClient);
        } catch (error) {
            stopLoadingDelay();
            console.error("Erro ao buscar dados do cliente:", error);
        }
    };

    const obterExtratos = async (token, id) => {
        startLoading()
        axios.get(`${GET_CLIENT_EXTRACTS_ROUTE}${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => {
            if (res.data) {
                stopLoading()
                setClientExtracts(res.data)
                return res.data;
            }
        }).catch(err => {
            stopLoading()
            return null;
            console.log(err)
        })
    }

    const obterModeloDeContratos = async (token) => {
        console.log("Buscando modelos de contratos...");
        startLoading();
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_ROUTE}contract`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.data) {
                setModeloDeContratos(response.data);
                console.log("Modelos de contratos recebidos:", response.data);
            }
        } catch (error) {
            console.error("Erro ao obter modelos de contratos:", error);
        } finally {
            stopLoading();
        }
    }

    const refreshClientData = async () => {
        if (token) {
            const storedId = sessionStorage.getItem('userId');
            if (storedId) {
                await fetchClientData(token, storedId);
                await obterModeloDeContratos(token);
            }
        }
    };

    const login = async (cpf, password) => {
        startLoading();
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
            await obterModeloDeContratos(receivedToken);
            setTimeout(stopLoading, 1200);
            return true;
        } catch (error) {
            console.error("Erro ao logar:", error);
            setToken(null);
            setTimeout(stopLoading, 1200);
            return false; // Indica falha no login
        }
    };

    const logout = () => {
        startLoading();
        setToken(null);
        setClientData(null);
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userId');
        setTimeout(stopLoading, 500);
    };

    return (
        <AuthContext.Provider value={{ token, clientData, clientExtracts, login, logout, isInitialized, refreshClientData, modeloDeContratos }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;