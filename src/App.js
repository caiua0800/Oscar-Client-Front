import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import LoginPage from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import AuthProvider from './context/AuthContext';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Cadastro from './Components/Cadastro/Cadastro';
import Carteira from './Components/Carteira/Carteira';
import ContainerGeneral from './Components/Container/Container';
import Contracts from './Components/Contracts/Contracts';
import { LoadProvider } from './context/LoadContext';
import Loading from './Components/Loading2/Loading2';
import Chat from './Components/Chat/Chat';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #d7dbe0, #c5cdd6, #b3bec9);
    border-radius: 0px;
  }
`;

const ContainerWrapper = () => (
  <ContainerGeneral>
    <Outlet />
  </ContainerGeneral>
);

function App() {
  return (
    <LoadProvider>
      <AuthProvider>
        <GlobalStyle />
        <Loading />
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route element={<PrivateRoute />}>
              <Route element={<ContainerWrapper />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/wallet" element={<Carteira />} />
                <Route path="/contracts" element={<Contracts />} />
                <Route path="/Chat" element={<Chat />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </LoadProvider>

  );
}

export default App;
