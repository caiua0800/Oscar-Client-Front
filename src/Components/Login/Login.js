import React, { useContext, useState } from "react";
import * as S from "./LoginStyle";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();

        if (cpf.trim() === "" || password.trim() === "") {
            setShowError(true);
            alert("CPF ou senha inválidos.");
            return;
        }

        const loginSuccessful = await login(cpf, password);

        if (!loginSuccessful) {
            setShowError(true);
            console.log('Falha no login.');
        } else {
            setShowError(false);
            console.log('Login bem-sucedido!');
            navigate('/dashboard');
        }
    };

    return (
        <S.LoginContent>
            <S.BackBlack />
            <S.LoginBox onSubmit={handleLogin}>
                <S.Logo src='imagemAu.png' alt="Logo" />
                <S.Title>Bem-vindo!</S.Title>
                <S.LoginForm>
                    <S.Input
                        type="text"
                        placeholder="CPF"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                    />
                    <S.InputPass>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type='button' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <img src='opened-eye.svg' alt="Mostrar Senha" /> : <img src='closed-eye.svg' alt="Esconder Senha" />}
                        </button>
                    </S.InputPass>

                    {showError && <p style={{ color: 'red' }}>Erro ao fazer login. Tente novamente.</p>}

                    <S.forgotPassLinky onClick={() => { window.location.href = "/recover" }}>Esqueceu a senha?</S.forgotPassLinky>
                    <S.SubmitButton type="submit">Login</S.SubmitButton>
                    <S.singUpLink>Não possui cadastro? <a onClick={() => { window.location.href = "/cadastro" }}>Cadastre-se já</a> </S.singUpLink>
                </S.LoginForm>
            </S.LoginBox>
        </S.LoginContent>
    );
};

export default LoginPage;
