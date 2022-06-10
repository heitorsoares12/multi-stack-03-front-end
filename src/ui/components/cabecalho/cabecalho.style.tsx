import { styled } from "@mui/system";

export const CabecalhoContainer = styled('header')`
    display: flex;
    justify-content: center;
    background-color: #313536;
    padding: ${({theme}) => theme.spacing(6)};
`;

export const Logo = styled('img')`
    background-color: #313536;
    width: 85px;
`;

export const TituloLogo = styled('h1')`
    background-color: #313536;
    font-size: 40px;
    margin-left: 10px;
    color: #ffff;
    text-align: center;
`;