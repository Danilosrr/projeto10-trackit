import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TokenContext from "./contextos/TokenContext";

import Login from "./componentes/login/Login"
import Cadastro from "./componentes/login/Cadastro";

export default function App(){

    const [token, setToken] = useState(null)

    return(
        <TokenContext.Provider value={{token,setToken}}>
            <BrowserRouter>
                <Routes>
                
                    <Route path="/" element={<Login/>}/>
                    <Route path="/Cadastro" element={<Cadastro/>}/>

                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}