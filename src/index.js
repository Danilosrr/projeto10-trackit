import reactDom from "react-dom";
import App from "./App";
import "./assets/css/reset.css"
import "./assets/css/fonts.css"


const divRoot = document.querySelector(".root");
reactDom.render(<App/>,divRoot);