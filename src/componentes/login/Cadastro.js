import React, { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import loadingContext from '../../contextos/LoadingContext';
import BotaoCarregando from './BotaoCarregando';
import logo from "../../assets/img/logo.png";

export default function Cadastro(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const { loading, setLoading } = useContext(loadingContext);

    const navigate = useNavigate();

    function efetuarCadastro(event){
        event.preventDefault();
        setLoading(true);

        const promise = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`,
            {
                email: `${email}`,
                name: `${nome}`,
                image: `${foto}`,
                password: `${senha}`
            }
        );

        promise.then((response)=>{
            console.log(response);
            setLoading(false);
            navigate("/");
        });
        promise.catch((error)=>{
            console.log(error.response)
            setLoading(false);
            alert("Falha no cadastro")
        });

    }

    return(
        <>
            <PaginaCadastro>
                <img src={logo} alt="logo"/>
                <h1>TrackIt</h1>
                <form onSubmit={efetuarCadastro}>
                    <input type="email" placeholder='email'id='email' value={email} onChange={(e)=>setEmail(e.target.value)} disabled={loading}/>
                    <input type="password" placeholder='senha' id='senha' value={senha} onChange={(e)=>setSenha(e.target.value)} disabled={loading}/>
                    <input type="text" placeholder='nome' id='nome' value={nome} onChange={(e)=>setNome(e.target.value)} disabled={loading}/>
                    <input type="url" placeholder='foto' id='foto' value={foto} onChange={(e)=>setFoto(e.target.value)} disabled={loading}/>
                    {loading?
                        <BotaoCarregando/>   
                        :<input type="submit" value='Cadastrar' id='enviarCadastro'/>
                    }
                </form>    
                <Link to={`/`}>
                   <h3>Já tem uma conta? faça login!</h3>
                </Link>
            </PaginaCadastro>
        </>
    )
}

const PaginaCadastro=styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 36px;

    img{
    width: 160px;
    }
    h1{
        font-family: 'Playball', cursive;
        font-size: 68px;
        color: #126BA5;
    }
    input{
        width: 100%;
        height: 45px;
        margin: 6px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 21px;
    }
    #enviarCadastro{
        background-color: #52B6FF;
        color: #FFFFFF;
    }
    a{
        color: #52B6FF;
    }
`