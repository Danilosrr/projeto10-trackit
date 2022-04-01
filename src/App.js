import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contextos/UserContext";
import LoadingContext from "./contextos/LoadingContext";

import Login from "./componentes/login/Login"
import Cadastro from "./componentes/login/Cadastro";
import Hoje from "./componentes/habitos/Hoje";
import Habitos from "./componentes/habitos/Habitos";

import "./assets/css/reset.css";
import "./assets/css/fonts.css";

import 'react-circular-progressbar/dist/styles.css';

export default function App(){

    const [token, setToken] = useState(null)
    const [image, setImage] = useState(null)
    const [habitosHoje, setHabitosHoje]= useState("")
    const [loading,setLoading] = useState(false)

    return(
        <LoadingContext.Provider value={{loading,setLoading}}>
            <UserContext.Provider value={{token,setToken,image,setImage,habitosHoje, setHabitosHoje}}>
                <BrowserRouter>
                    <Routes>
                    
                        <Route path="/" element={<Login/>}/>
                        <Route path="/cadastro" element={<Cadastro/>}/>
                        <Route path="/hoje" element={<Hoje/>}/>
                        <Route path="/habitos" element={<Habitos/>}/>
                        
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </LoadingContext.Provider>
    )
}