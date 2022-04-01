import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export default function Menu(props){
    const {lista} = props

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
        <PaginaMenu>
            <div className='botoes'>
                <Link to={"/habitos"}>
                    <h2>Hábitos</h2>
                </Link>
                <Link to={"/historico"}>
                    <h2>Histórico</h2>
                </Link> 
            </div>

            <div className='contador'>
                <Link to={"/hoje"}>
                    <CircularProgressbarWithChildren value={percentagem} text={'hoje'} background={true} backgroundPadding={6} styles={{
                        text: {
                        fill: '#FFFFFF',
                        fontSize: '24px',
                        },
                        background: {
                        fill: '#52B6FF',
                        },
                        path: {
                        stroke: '#FFFFFF',
                        },
                        trail: {
                        stroke: '#52B6FF'    
                        }
                    }}/>  
                </Link>
            </div>
           
        </PaginaMenu>
    )
}

const PaginaMenu=styled.footer`

    display: flex;
    justify-content: center;

    .botoes{
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 20px;
        background-color: #FFFFFF;
        box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.15); 
    }
    
    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #52B6FF;   
    }

    .contador{
        position: fixed;
        bottom: 10px;
        width: 90px;
        height: 90px;
    }
    a{
        text-decoration: none;
    }
`