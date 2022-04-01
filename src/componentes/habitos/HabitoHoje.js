import axios from "axios";
import { useContext } from "react";
import styled from "styled-components"

import UserContext from '../../contextos/UserContext';
import loadingContext from "../../contextos/LoadingContext";

import { Checkbox } from 'react-ionicons'

export default function HabitoHoje(props){
    const { id,nome,feito} = props

    const { token } = useContext(UserContext);
    const { setLoading } = useContext(loadingContext);


    function concluirHabito(habitoId){

        const userToken = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const promise = axios.post(`
        https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitoId}/check`,
        {},userToken);
        setLoading(true);

        promise.then((response)=>{
            console.log(response);
            setLoading(false);
            console.log("habito concluido");
        });
        promise.catch((error)=>{
            console.log(error.response);
            setLoading(false);
        });
    }

    return(
        <DivHabitoHoje>
            <div className="informacaoHabito">
                <h3>{nome}</h3>
            </div>
            <Checkbox onClick={()=>concluirHabito(id)}
                color={feito?'#8FC549':'#EBEBEB'} 
                height="75px"
                width="75px"
            />
        </DivHabitoHoje>
    )
}

const DivHabitoHoje=styled.div`
    box-sizing: border-box;
    background-color: #FFFFFF;
    width: 100%;
    height: 90px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 10px;
`