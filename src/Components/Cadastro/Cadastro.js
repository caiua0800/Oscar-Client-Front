import React, { useEffect, useState } from "react";
import * as S from "./CadastroStyle";
import { helpers } from "../../Helpers/helpers";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
const States = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];


export default function Cadastro() {
    const [deOndeVeio, setDeOndeVeio] = useState("Selecione")
    const [indicador, setIndicador] = useState(null)
    const [faseUm, setFaseUm] = useState(false);
    const navigate = useNavigate(); // Inicializa o hook useNavigate
    const [estado, setEstado] = useState("PR")
    const [cidade, setCidade] = useState("")
    const [bairro, setBairro] = useState("")
    const [cep, setCep] = useState("")
    const [rua, setRua] = useState("")
    const [numero, setNumero] = useState("")
    const [faseDois, setFaseDois] = useState(false);

    const [nomeCompleto, setNomeCompleto] = useState("");
    const [contato, setContato] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataDeNascimento, setDataDeNascimento] = useState(null);
    const [email, setEmail] = useState("");
    const [senha1, setSenha1] = useState("");
    const [senha2, setSenha2] = useState("");
    const [faseTres, setFaseTres] = useState(false);
    const [monthlyIncome, setMonthlyIncome] = useState("Selecione");
    const [profession, setProfession] = useState("Selecione");
    const [cadastroFeito, setCadastroFeito] = useState(false);


    const handleFase2 = () => {
        if (estado.trim() != "" && cidade.trim() != "" && bairro.trim() != "" &&
            cep.trim() != "" && rua.trim() != "" && numero.trim() != "") {
            setFaseDois(true);
        } else {
            alert("Infome os Campos Obrigatórios");
            return;
        }
    }

    const handleFase3 = () => {
        if (nomeCompleto.trim() != "" && contato.trim() != "" && dataDeNascimento &&
            email.trim() != "" && senha1.trim() != "" && senha2.trim() != "" && cpf.trim() != "") {
            setFaseTres(true);
        } else {
            alert("Infome os Campos Obrigatórios");
            return;
        }
    }

    const handleCadastro = async () => {
        const cliente = {
            name: nomeCompleto,
            id: cpf, // A ID deve ser única, aqui usando CPF como exemplo
            email: email,
            phone: contato,
            balance: 0.0,
            platformId: "01",
            profession: profession, // Adicione sua lógica para coletar profissão, se necessário
            monthlyIncome: monthlyIncome, // Similarmente para a renda mensal
            password: senha1,
            confirmPassword: senha2,
            sponsorId: indicador,
            address: {
                street: rua,
                number: numero,
                neighborhood: bairro,
                city: cidade,
                state: estado,
                zipcode: cep,
            },
            cameFrom: deOndeVeio,
        };


        const sucesso = await helpers.cadastro(cliente);

        if (sucesso) {
            setCadastroFeito(true);
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } else {
            alert("Houve um erro no cadastro. Tente novamente.");
        }
    };


    return (

        <S.CadastroContent>
            <h1 className="Title">Seja bem vindo a Plataforma</h1>

            {!faseUm && (
                <S.Padrao>
                    <label htmlFor="deOndeVoceVeio">Como Chegou até a plataforma?</label>
                    <select className="deOndeVoceVeio"
                        value={deOndeVeio}
                        onChange={(e) => setDeOndeVeio(e.target.value)}>
                        <option value="Selecione">Selecione</option>
                        <option value="Anúncio do Google">Anúncio do Google</option>
                        <option value="Anúncio no Instagram">Anúncio no Instagram</option>
                        <option value="Por um Vendedor">Por um Vendedor</option>
                        <option value="Um Amigo me Indicou">Um Amigo me Indicou</option>
                        <option value="Outro">Outro</option>
                    </select>

                    {(deOndeVeio === 'Por um Vendedor' || deOndeVeio === 'Um Amigo me Indicou') && (
                        <div className="contemIndicador">
                            <label htmlFor="indicadorUsername">Usuário do Indicador</label>
                            <input value={indicador} onChange={(e) => setIndicador(e.target.value)} placeholder="nome de usuário (opcional)" />
                        </div>
                    )}

                    {(deOndeVeio != "Selecione") && (
                        <button onClick={() => setFaseUm(true)} className="prosseguir0"> PROSSEGUIR COM O CADASTRO </button>
                    )}
                </S.Padrao>
            )}

            {faseUm && !faseDois && (
                <S.Padrao>
                    <label htmlFor="estado">Selecione seu Estado</label>
                    <select className="estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}>
                        {States && States.map((state) => (
                            <option value={state}>{state}</option>
                        ))}
                    </select>
                    <label htmlFor="cidade">Informe sua Cidade</label>
                    <input className="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="(obrigatório)" />
                    <label htmlFor="cep">Infome seu CEP</label>
                    <input className="cep" value={cep} onChange={(e) => setCep(e.target.value)} placeholder="(obrigatório)" />
                    <label htmlFor="bairro">Informe seu Bairro</label>
                    <input className="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} placeholder="(obrigatório)" />
                    <label htmlFor="rua">Informe sua Rua,Av...</label>
                    <input className="rua" value={rua} onChange={(e) => setRua(e.target.value)} placeholder="(obrigatório)" />
                    <label htmlFor="numero">Informe o Número da Residência, apt...</label>
                    <input className="numero" value={numero} onChange={(e) => setNumero(e.target.value)} placeholder="(obrigatório)" />

                    <label htmlFor="profession">Qual Sua Profissão</label>
                    <select className="profession" onChange={(e) => setProfession(e.target.value)}>
                        <option value="Opcional">Selecione</option>
                        {helpers.professionsArray && helpers.professionsArray.sort().map(prof => (
                            <option key={prof} value={prof}>
                                {prof}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="mediaSalarial">Informe sua Média Salarial</label>
                    <select onChange={(e) => setMonthlyIncome(e.target.value)} className="monthlySalary">
                        <option value="monthlySalary">Selecione</option>
                        {helpers.monthlyIncomesArray && helpers.monthlyIncomesArray.map(prof => (
                            <option value={prof}>{prof}</option>
                        ))}
                    </select>
                    <button className="prosseguir0" onClick={handleFase2}>PROSSEGUIR</button>
                </S.Padrao>
            )}

            {faseUm && faseDois && !faseTres && (
                <S.Padrao>

                    <label htmlFor="nome">Digite seu Nome Completo</label>
                    <input className="nome" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} placeholder="(obrigatório)" />
                    <label htmlFor="cpf">Digite seu CPF</label>
                    <input className="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="(obrigatório)" />
                    <label htmlFor="dataDeNascimento">Data de Nascimento</label>
                    <input type="date" className="dataDeNascimento" value={dataDeNascimento} onChange={(e) => setDataDeNascimento(e.target.value)} placeholder="(obrigatório)" />
                    <label htmlFor="contato">Digite seu Contato</label>
                    <input className="contato" value={contato} onChange={(e) => setContato(e.target.value)} placeholder="(obrigatório)" />
                    <label htmlFor="email">Informe seu Email de Cadastro</label>
                    <input type="email" className="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="(obrigatório)" />
                    <label htmlFor="senha1">Crie uma Senha</label>
                    <input type="password" className="senha1" value={senha1} onChange={(e) => setSenha1(e.target.value)} placeholder="(obrigatório)" />
                    <label htmlFor="senha2">Confirme sua Senha</label>
                    <input type="password" className="senha2" value={senha2} onChange={(e) => setSenha2(e.target.value)} placeholder="(obrigatório)" />

                    <button onClickCapture={handleCadastro} className="prosseguir0" onClick={handleFase3}>CRIAR CONTA</button>
                </S.Padrao>
            )}

            {cadastroFeito && (
                <>
                    <S.CadastroFeito>
                        <h2>Cadastro realizado com sucesso!</h2>
                        <p>Você será redirecionado para a página inicial.</p>
                    </S.CadastroFeito>
                </>
            )}

        </S.CadastroContent>
    )
}