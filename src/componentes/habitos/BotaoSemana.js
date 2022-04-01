import { useState } from "react";
import styled from "styled-components";

export default function BotaoSemana(props){

    const[selecionado,setSelecionado]=useState(false)
    const {dia,num,setDiasSelecionados,diasSelecionados} = props

    function criarLista(numero){
        let array=[...diasSelecionados];

        if (array.includes(numero)){
            let index = array.indexOf(numero);
            array.splice(index,1);    
        }else{
            array.push(numero);
        };
        
        setDiasSelecionados(array);
    }

    return(
        <BotaoDia marcado={selecionado} onClick={()=>{
            setSelecionado(!selecionado);
            criarLista(num);
            console.log(diasSelecionados)
            }}>
            {dia[0].toUpperCase()}
        </BotaoDia>
    )
}

const BotaoDia = styled.button`
    background-color: ${props=> props.marcado? '#DBDBDB':'#FFFFFF'};
    color: ${props=> props.marcado? '#FFFFFF':'#DBDBDB'};
    border: 1px solid #D5D5D5;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    height: 40px;
    width: 40px;
    margin: 5px 2px;

`