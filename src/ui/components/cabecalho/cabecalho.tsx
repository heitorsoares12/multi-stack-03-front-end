import { 
    CabecalhoContainer,
    Logo
 } from "./cabecalho.style";

 export default function Cabecalho() {
     return(
         <CabecalhoContainer>
             <Logo src="/image/logo.svg" alt="Adote um Pet"/>
         </CabecalhoContainer>
     )
 }