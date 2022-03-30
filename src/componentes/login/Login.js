import React, { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import tokenContext from '../../contextos/TokenContext';
import logo from "../../assets/img/logo.png"

export default function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { token, setToken } = useContext(tokenContext);


    function efetuarLogin(event){
        event.preventDefault();
        console.log(senha,email);

        const promise = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`,            
            {
                email: `${email}`,
                password: `${senha}`,
            }
        );
        promise.then((response)=>{
            setToken(response.data.token);
            console.log(token);
            alert("sucesso");
        });
        promise.catch((error)=>{
            console.log(error.response)
        });
    }

    return(
        <>
            <PaginaLogin>
                <img src={logo} alt="logo"/>
                <h1>TrackIt</h1>
                <form onSubmit={efetuarLogin}>
                    <input type="email" placeholder='email'id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='senha' id='senha' value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                    <input type="submit" value='Entrar' id='enviarLogin'/>
                </form>    
                <Link to={`/Cadastro`}>
                   <h3>Não tem uma conta? Cadastre-se!</h3>
                </Link>
            </PaginaLogin>
        </>
    )
}

const PaginaLogin=styled.div`
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
    #enviarLogin{
        background-color: #52B6FF;
        color: #FFFFFF;
    }
    a{
        color: #52B6FF;
    }
`