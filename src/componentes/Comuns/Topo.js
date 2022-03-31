import styled from 'styled-components';

export default function Topo(props){
    return(
        <PaginaTopo>
            <h1>TrackIt</h1>
            <figure>
                <img src={props.src} alt='foto do usuário'/>
            </figure>
        </PaginaTopo>
    )
}

const PaginaTopo=styled.header`
    
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    padding:8px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1{
        font-family: 'Playball', cursive;
        font-size: 39px;
        color: #FFFFFF;   
    }
    figure{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 54px;
        height: 54px;
        margin: auto 18px;
    }
    img{
        width:54px;
        height:54px;
        border-radius: 27px;
    }
`