import { useState } from "react"
import styled from "styled-components"
import BotaoSemana from "./BotaoSemana"

export default function CriarHabito(props){

    const[diasSelecionados,setDiasSelecionados]=useState([])

    return(
        <DivCriarHabito>
            <input className="nomeHabito" type="text" placeholder=" nome do hábito"/>
            <div className="dias">
                <BotaoSemana dia="domingo" setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
                <BotaoSemana dia="segunda" setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
                <BotaoSemana dia="terça" setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
                <BotaoSemana dia="quarta" setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
                <BotaoSemana dia="quinta" setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
                <BotaoSemana dia="sexta" setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
                <BotaoSemana dia="sabado" setDiasSelecionados={setDiasSelecionados} diasSelecionados={diasSelecionados}/>
            </div>
        </DivCriarHabito>
    )
}


const DivCriarHabito=styled.div`
    box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: 5px;
    height: 180px;
    display: block;
    padding: 15px;

    .nomeHabito{
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        height: 45px;
        width: 100%;
    };
     
`