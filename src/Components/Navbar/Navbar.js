import React, { useEffect, useState } from "react";
import * as S from "./NavbarStyle";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar({ setShowProfile, showProfile }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [navegacao, setNavegacao] = useState("");

  // Mapeamento de rotas para nomes amigáveis
  const navMap = {
    wallet: "Carteira",
    dashboard: "Dashboard",
    contracts: "Contratos",
    business: "Negócios",
    company: "Empresa",
    products: "Produtos",
    investments: "Investimentos",
  };

  const handleChange = (e) => {
    const targetValue = e.target.value;
    navigate(targetValue);
    setNavegacao(targetValue);
  };

  useEffect(() => {
    // Pega a parte da URL após a última barra
    const pathArray = window.location.pathname.split('/');
    const currentPath = pathArray[pathArray.length - 1]; // último elemento

    // Atualiza o estado de navegação para o nome amigável
    setNavegacao(navMap[currentPath] || currentPath);
  }, []); // Executa apenas uma vez no carregamento inicial

  return (
    <S.NavContainer>
      <S.Navbar>
        <S.NavPartOne onClick={logout}>
          <img alt="exit icon" src="exit-door-icon.png" />
        </S.NavPartOne>

        <S.NavPartTwo>
          <S.PerfilIcon>
            <img onClick={() => { setShowProfile(!showProfile) }} alt="profile picture" src="developer-image.jpeg" />
          </S.PerfilIcon>
          <select onChange={(e) => handleChange(e)}>
            <option value="/dashboard" selected={navegacao === "Dashboard"}>Dashboard</option>
            <option value="/wallet" selected={navegacao === "Carteira"}>Carteira</option>
            <option value="/contracts" selected={navegacao === "Contratos"}>Contratos</option>
            <option value="/business" selected={navegacao === "Negócios"}>Negócios</option>
            <option value="/company" selected={navegacao === "Empresa"}>Empresa</option>
            <option value="/products" selected={navegacao === "Produtos"}>Produtos</option>
            <option value="/investments" selected={navegacao === "Investimentos"}>Investimentos</option>
          </select>
        </S.NavPartTwo>
      </S.Navbar>
    </S.NavContainer>
  );
}