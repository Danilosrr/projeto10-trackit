import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TokenContext from "./contextos/TokenContext";
import LoadingContext from "./contextos/LoadingContext";

import Login from "./componentes/login/Login"
import Cadastro from "./componentes/login/Cadastro";
import "./assets/css/reset.css";
import "./assets/css/fonts.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App(){

    const [token, setToken] = useState(null)
    const [loading,setLoading] = useState(false)

    return(
        <LoadingContext.Provider value={{loading,setLoading}}>
            <TokenContext.Provider value={{token,setToken}}>
                <BrowserRouter>
                    <Routes>
                    
                        <Route path="/" element={<Login/>}/>
                        <Route path="/Cadastro" element={<Cadastro/>}/>

                    </Routes>
                </BrowserRouter>
            </TokenContext.Provider>
        </LoadingContext.Provider>
    )
}