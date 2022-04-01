import styled from "styled-components"
import {Trash} from "react-ionicons";

export default function MeuHabito(props){
    const{nome,dias}=props

    return(
        <DivMeuHabito className="habitoApi">
            <div className="botoesHabito">
                <h3>{nome}</h3>
                <Trash
                    color={'#666666'} 
                    height="13x"
                    width="15px"
                />
            </div>
            
            <div className="diasDaSemana">
                <DivDiaDaSemana className="diaDaSemana" marcado={dias.includes(1)}>D</DivDiaDaSemana>
                <DivDiaDaSemana className="diaDaSemana" marcado={dias.includes(2)}>S</DivDiaDaSemana>
                <DivDiaDaSemana className="diaDaSemana" marcado={dias.includes(3)}>T</DivDiaDaSemana>
                <DivDiaDaSemana className="diaDaSemana" marcado={dias.includes(4)}>Q</DivDiaDaSemana>
                <DivDiaDaSemana className="diaDaSemana" marcado={dias.includes(5)}>Q</DivDiaDaSemana>
                <DivDiaDaSemana className="diaDaSemana" marcado={dias.includes(6)}>S</DivDiaDaSemana>
                <DivDiaDaSemana className="diaDaSemana" marcado={dias.includes(7)}>S</DivDiaDaSemana>
            </div>
        </DivMeuHabito>
    )
}

const DivMeuHabito=styled.div`
    box-sizing: border-box;
    background-color: #FFFFFF;
    width: 100%;
    height: fit-content;
    margin: 10px 0;
    border-radius: 5px;
    padding: 15px;

    .botoesHabito{
        color: #666666;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .diasDaSemana{
        display: flex;
        justify-content: flex-start;
    }
`
const DivDiaDaSemana=styled.div`
    box-sizing: border-box;
    background-color: ${props=> props.marcado? '#DBDBDB':'#FFFFFF'};
    color: ${props=> props.marcado? '#FFFFFF':'#DBDBDB'};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 5px;
`