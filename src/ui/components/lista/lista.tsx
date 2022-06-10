/* eslint-disable react/jsx-key */
import { Button } from "@mui/material";
import {
  ListaStyled,
  ItemLista,
  Foto,
  Informacoes,
  Descricao,
  Nome
} from "./lista.style";
import { Pet } from "../../../data/@types/pet";
import { TextService } from "../../../data/services/textService";

interface ListaProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function Lista(props: ListaProps) {
  const tamanhoMaximoTexto = 200;
  return (
    <ListaStyled>
      {props.pets.map((pet) => (
        <ItemLista key={pet.id}>
          <Foto src={pet.foto} alt={pet.nome} />
          <Informacoes>
            <Nome>{pet.nome}</Nome>
            <Descricao>
              {TextService.limitarTexto(pet.historia, tamanhoMaximoTexto)}
            </Descricao>
            <Button variant={"contained"} fullWidth onClick={() => props.onSelect(pet)}>
              
              Doar para {pet.nome}
            </Button>
          </Informacoes>
        </ItemLista>
      ))}
    </ListaStyled>
  );
}
