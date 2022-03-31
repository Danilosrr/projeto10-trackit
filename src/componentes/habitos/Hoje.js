import {useContext} from "react";
import UserContext from '../../contextos/UserContext';

import Topo from "../Comuns/Topo";
import Menu from "../Comuns/Menu";

export default function Hoje(){

    const { image } = useContext(UserContext);

    return(
        <>
            <Topo src={image}/>
            <Menu/>
        </>
    )
}