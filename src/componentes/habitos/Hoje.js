import {useContext,useEffect } from "react";
import axios from "axios";
import UserContext from '../../contextos/UserContext';
import styled from "styled-components";

import Topo from "../Comuns/Topo";
import Menu from "../Comuns/Menu";
import HabitoHoje from "./HabitoHoje";
import DiaAtual from "./DiaAtual";

export default function Hoje(){

    const { token,image,habitosHoje,setHabitosHoje } = useContext(UserContext);

    useEffect(()=>{
        const userToken = {
        headers: { Authorization: `Bearer ${token}` }
        };

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", userToken);

        promise.then(response => {
            console.log(response);
            setHabitosHoje(response.data);

        });
        promise.catch(error => 
            console.log(error.response)
        );
    }, [token]);
    

    return(
        <>
            <Topo src={image}/>
            <DiaAtual lista={habitosHoje}/>
            <PaginaHoje>
                {habitosHoje.length<=0?
                    <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>:
                    habitosHoje.map(habito=><HabitoHoje key={habito.id} nome={habito.name} feito={habito.done}/>)
                }
            </PaginaHoje>
            <Menu lista={habitosHoje}/>
        </>
    )
}

const PaginaHoje = styled.section`
    background-color: #E5E5E5;
    padding: 0 15px 80px 15px;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 67vh;
`