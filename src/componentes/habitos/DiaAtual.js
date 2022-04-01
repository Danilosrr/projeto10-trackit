import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'

export default function DiaAtual(props){
    const {lista} = props
    console.log(dayjs());
    dayjs.locale('pt-br');

    function percentage(array){
        let count=0;
        for(let i=0;i<array.length;i++){
            if(array[i].done===true){
                count+=1
            }
        };
        let valor = (count/array.length)*100
        return parseInt(valor)
    };

    let percentagem = percentage(lista);

    return(
        <DivDiaAtual valor={percentagem}>
            <h2 className="diaAtual">{(`${dayjs().format('dddd, DD/MM')}`)}</h2>
            <h3 className="porcentagem">{percentagem===0||isNaN(percentagem)?'Nenhum hábito concluído ainda':`${percentagem}% dos hábitos concluídos`}</h3>
        </DivDiaAtual>
    )
}

const DivDiaAtual=styled.section`
    display: block;
    margin-top: 80px;
    padding: 15px;
    .diaAtual{
        font-family: 'Lexend Deca', sans-serif;
        color: #126BA5; 
        font-size: 23px;
        margin-bottom: 5px;
    }
    .porcentagem{
        font-family: 'Lexend Deca', sans-serif;
        color: ${props=>props.valor<=0?'#BABABA':'#8FC549'};
        font-size: 18px;
    }
`