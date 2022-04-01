import {useContext,useEffect,useState } from "react";
import axios from "axios";
import styled from "styled-components"

import UserContext from '../../contextos/UserContext';
import loadingContext from "../../contextos/LoadingContext";

import Topo from "../Comuns/Topo";
import Menu from "../Comuns/Menu";
import CriarHabito from "./CriarHabito";
import MeuHabito from "./MeuHabito";

export default function Habitos(){

    const { token,image,habitosHoje } = useContext(UserContext);
    const { loading } = useContext(loadingContext);

    const[meusHabitos,setMeusHabitos] = useState([]);
    const[criarHabito,setCriarHabito] = useState(false);
    const[diasSelecionados,setDiasSelecionados]=useState([]);
    const[nomeDoHabito,setNomeDoHabito]=useState("");
    
    useEffect(()=>{
        const userToken = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", userToken);

        promise.then(response => {
            console.log(response);
            setMeusHabitos(response.data);
        });
        promise.catch(error => {
            console.log(error.response);
        });
    }, [token,loading]);
    
    return(
        <>
            <Topo src={image}/>
            <PaginaHabitos>
                <div className="adicionarHabito">
                    <h2>Meus hábitos</h2>
                    <button className="botaoAdicionarHabito" onClick={()=>setCriarHabito(true)}>+</button>
                </div>
                {criarHabito?<CriarHabito setCriarHabito={setCriarHabito} meusHabitos={meusHabitos} setMeusHabitos={setMeusHabitos}
                diasSelecionados={diasSelecionados} setDiasSelecionados={setDiasSelecionados} nomeDoHabito={nomeDoHabito} setNomeDoHabito={setNomeDoHabito}/>
                :<></>}
                <ListaHabitos>
                    {meusHabitos.length<=0?
                        <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>:
                        meusHabitos.map(habito=><MeuHabito key={habito.id} id={habito.id} nome={habito.name} dias={habito.days}/>)
                    }
                </ListaHabitos>
            </PaginaHabitos>
            <Menu lista={habitosHoje}/>
        </>
    )
}

const PaginaHabitos = styled.section`
    box-sizing: border-box; 
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'Lexend Deca', sans-serif;
    padding: 80px 10px;
    
    .adicionarHabito{
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        width: 100%;
        font-size: 23px;
        color: #126BA5;
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
const ListaHabitos = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    overflow-y: scroll;
    width: 100%;
    height: 90%;
    padding-bottom: 40px;
`