import { TituloStyled, Subtitulo } from "./titulo.style";

interface TituloProps{
    titulo: string;
    subtitulo?:  | JSX.Element;
}

export default function Titulo(props: TituloProps) {
  return (
    <>
      <TituloStyled>{props.titulo}</TituloStyled>
      <Subtitulo>{props.subtitulo}</Subtitulo>
    </>
  );
}
