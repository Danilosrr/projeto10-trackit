import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/img/logo.png"
import { Link } from 'react-router-dom';
import "../../assets/css/fonts.css"


export default function Login(){
    return(
        <>
            <Pagina>
                <img src={logo} alt="logo"/>
                <h1>TrackIt</h1>
                <input type="email" placeholder='email'id='email'/>
                <input type="password" placeholder='senha' id='senha'/>
                <input type="submit" id='enviarCadastro'/>
                <Link to={`/Cadastro`}>
                   <h3>Não tem uma conta? Cadastre-se!</h3>
                </Link>
            </Pagina>
        </>
    )
}

const Pagina=styled.div`
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