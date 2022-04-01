import { useState, useContext } from "react"
import axios from "axios";
import styled from "styled-components"
import BotaoSemana from "./BotaoSemana"

import UserContext from '../../contextos/UserContext';
import loadingContext from '../../contextos/LoadingContext';
import { ThreeDots } from "react-loader-spinner";

export default function CriarHabito(props){

    const{setCriarHabito}=props

    const { token } = useContext(UserContext);
    const { loading, setLoading } = useContext(loadingContext);

    const[diasSelecionados,setDiasSelecionados]=useState([])
    const[nomeDoHabito,setNomeDoHabito]=useState("")

    function enviarHabito(){

        const habitoEnviado={
            name: nomeDoHabito,
            days: diasSelecionados
        };
        const userToken = {
            headers: { Authorization: `Bearer ${token}` }
            };

        const promise = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,            
            habitoEnviado, 
            userToken
        );
        setLoading(true);

        promise.then((response)=>{
            console.log(response);
            setLoading(false);
            setCriarHabito(false);
        });
        promise.catch((error)=>{
            console.log(error.response);
            setLoading(false);
            setCriarHabito(false);
        });
    }

    return(
        <DivCriarHabito>
            <input className="nomeHabito" type="text" placeholder="nome do hábito" value={nomeDoHabito} onChange={(event)=>setNomeDoHabito(event.target.value)} disabled={loading}/>
            <div className="dias">
                <BotaoSemana dia="domingo" num={1} setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
                <BotaoSemana dia="segunda" num={2} setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
                <BotaoSemana dia="terça" num={3} setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
                <BotaoSemana dia="quarta" num={4} setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
                <BotaoSemana dia="quinta" num={5} setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
                <BotaoSemana dia="sexta" num={6} setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
                <BotaoSemana dia="sabado" num={7} setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
            </div>
            <div className="cancelarSalvar">
                <button className="botaoCancelar" disabled={loading} onClick={()=>{
                    setCriarHabito(false);
                }}>Cancelar</button>
                <button className="botaoSalvar" disabled={loading} onClick={enviarHabito}>{loading?<ThreeDots type="ThreeDots" color="#FFFFFF" height={30} width={45}/>:'Salvar'}</button>
            </div>
        </DivCriarHabito>
    )
}


const DivCriarHabito=styled.div`
    box-sizing: border-box;
    background-color: #FFFFFF;
    width: 100%;
    border-radius: 5px;
    display: block;
    padding: 15px;

    .nomeHabito{
        font-family: 'Lexend Deca', sans-serif;
        color: #666666;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        height: 45px;
        width: 100%;
        
        ::placeholder{
            color: #DBDBDB;
        };
    };
    .cancelarSalvar{
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
    }
    .botaoCancelar{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 15px;
        height: 35px;
        border-radius: 5px;
        border: none;
        background-color: #FFFFFF;
        color: #52B6FF;
        margin-right: 10px;
    }
    .botaoSalvar{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 15px;
        height: 35px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        color: #FFFFFF;
    }
`