import {useContext } from "react";
import styled from "styled-components";

import UserContext from '../../contextos/UserContext';
import loadingContext from "../../contextos/LoadingContext";

import Topo from "../Comuns/Topo";
import Menu from "../Comuns/Menu";

export default function Historico(){
    const { token,image,habitosHoje,setHabitosHoje } = useContext(UserContext);
    const { loading } = useContext(loadingContext);

    return(
        <>
            <Topo src={image}/>
            <PaginaHistorico>
                <h2>histórico</h2>   
                <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3> 
            </PaginaHistorico>

            <Menu lista={habitosHoje}/>
        </>
    )
}

const PaginaHistorico = styled.section`
    background-color: #E5E5E5;
    margin: 100px  15px 15px 15px;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: fit-content;

    h2{
        font-family: 'Lexend Deca', sans-serif;
        color: #126BA5; 
        font-size: 23px;
        margin-bottom: 15px;
    }
`