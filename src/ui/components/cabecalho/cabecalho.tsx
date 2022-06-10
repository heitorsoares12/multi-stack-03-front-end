import { 
    CabecalhoContainer,
    Logo,
    TituloLogo
 } from "./cabecalho.style";

 export default function Cabecalho() {
     return(
         <CabecalhoContainer>
            <Logo src="/imagens/logo.svg" alt="Adote um Pet"/>
            <TituloLogo>DOAÇÕES ONLINE</TituloLogo>
         </CabecalhoContainer>
     )
 }