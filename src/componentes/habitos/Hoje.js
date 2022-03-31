import {useContext,useEffect,useState } from "react";
import axios from "axios";
import UserContext from '../../contextos/UserContext';
import styled from "styled-components"
import Topo from "../Comuns/Topo";
import Menu from "../Comuns/Menu";

export default function Hoje(){

    const { token,image } = useContext(UserContext);
    const[habitos,setHabitos] = useState("")

    useEffect(()=>{
        const userToken = {
        headers: { Authorization: `Bearer ${token}` }
        };

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", userToken);

        promise.then(response => {
            console.log(response);
            setHabitos(response.data);

        });
        promise.catch(error => 
            console.log(error.response)
        );
    }, [token]);
    
    

    return(
        <>
            <Topo src={image}/>
            <PaginaHoje>
                <h2>Habito de hoje</h2>
                <h2>Habito de hoje</h2>
                <h2>Habito de hoje</h2>
                <h2>Habito de hoje</h2>
                <h2>Habito de hoje</h2>
                {habitos.length<=0?
                    <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>:
                    habitos.map(habito=><h2>habito da api</h2>)
                }
            </PaginaHoje>
            <Menu/>
        </>
    )
}

const PaginaHoje = styled.section`
    margin-top: 80px;
    margin-bottom: 80px;
    background-color: lightgray;
`