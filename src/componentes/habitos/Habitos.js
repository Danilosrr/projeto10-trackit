import {useContext,useEffect,useState } from "react";
import axios from "axios";
import UserContext from '../../contextos/UserContext';
import styled from "styled-components"
import Topo from "../Comuns/Topo";
import Menu from "../Comuns/Menu";
import CriarHabito from "./CriarHabito";

export default function Habitos(){

    const { token,image } = useContext(UserContext);
    const[meusHabitos,setMeusHabitos] = useState("")
    const[criarHabito,setCriarHabito] = useState(false)

    useEffect(()=>{
        const userToken = {
        headers: { Authorization: `Bearer ${token}` }
        };

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", userToken);

        promise.then(response => {
            console.log(response);
            setMeusHabitos(response.data);

        });
        promise.catch(error => 
            console.log(error.response)
        );
    }, [token]);
    
    

    return(
        <>
            <Topo src={image}/>
            <PaginaHabitos>
                <div className="adicionarHabito">
                    <h2>Meus hábitos</h2>
                    <button className="botaoAdicionarHabito" onClick={()=>setCriarHabito(true)}>+</button>
                </div>
                {criarHabito?<CriarHabito/>:<></>}
                {meusHabitos.length<=0?
                    <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>:
                    meusHabitos.map(habito=><h2>habito da api</h2>)
                }
            </PaginaHabitos>
            <Menu/>
        </>
    )
}

const PaginaHabitos = styled.section`
    font-family: 'Lexend Deca', sans-serif;
    margin: 80px 10px;
    
    .adicionarHabito{
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        width: 100%;
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 20px;
    }
    .botaoAdicionarHabito{
        font-size: 26px;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-weigth: 700;
    }
`