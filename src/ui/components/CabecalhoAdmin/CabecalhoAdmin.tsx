import { Link, Box } from "@mui/material";
import NextLink from 'next/link';
import {
  CabecalhoContainer,
  Logo,
  LinksContainer,
} from "./CabecalhoAdmin.style";

export default function CabecalhoAdmin() {
  return (
  <CabecalhoContainer>
      <div>
          <Logo src="/imagens/logo.svg" alt={'Adote uma causa'} />
          <LinksContainer>
          <Link component={NextLink} href={'/'}>
                <a className="buttonLink" >Home</a>
            </Link>
            <Link component={NextLink} href={'/pets/cadastro'}>
                <a className="buttonLink" >Cadastrar ong</a>
            </Link>
            <Link component={NextLink} href={'/pets/relatorio'}>
                <a className="buttonLink">
                    Relatório{' '}
                    <Box 
                        component={'span'} 
                        sx={{ display: { sm: 'initial', xs: 'none'}}}
                    >
                    de Doações
                    </Box>
                </a>
            </Link>
          </LinksContainer>
      </div>

  </CabecalhoContainer>
  )
}
