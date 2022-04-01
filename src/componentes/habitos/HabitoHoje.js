import styled from "styled-components"
import { Checkbox } from 'react-ionicons'

export default function HabitoHoje(props){
    const {nome,feito} = props
    
    return(
        <DivHabitoHoje>
            <div className="informacaoHabito">
                <h3>{nome}</h3>
            </div>
            <Checkbox
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