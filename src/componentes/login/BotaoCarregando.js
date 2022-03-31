import { ThreeDots } from "react-loader-spinner";
import styled from 'styled-components';

export default function BotaoCarregando(){
    return(
        <Carregando className='loading'>
            <ThreeDots type="ThreeDots" color="#FFFFFF" height={45} width={45}/>    
        </Carregando>
    ) 
}

const Carregando=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 43px;
    margin: 6px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background-color: #52B6FF;
    color: #FFFFFF;
`