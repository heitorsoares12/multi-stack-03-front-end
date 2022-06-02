import type { NextPage } from "next";
import Titulo from "../ui/components/titulo/titulo";
import Lista from "../ui/components/lista/lista";

const Home: NextPage = () => {
  return (
    <div>
      <Titulo
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, voce <br />
            pode <strong>adotar um per virtualmente</strong>
          </span>
        }
      />

      <Lista 
      pets={[
        {
          id: 1,
          nome: 'foquinho',
          historia: 'loren aipsodhjaois hjoisdhoi sdhgoihodi hgoisdfh goihfdighaldfngh lafhdghfl ih',
          foto: 'https://www.uninassau.edu.br/sites/mauriciodenassau.edu.br/files/fields/imagemLateral/noticias/2020/09/cachorro-beagle-sentado-com-fundo-branco_53876-30186_0.jpg'
        },
        {
          id: 2,
          nome: 'bidu',
          historia: 'ashduahsdba jdnj asda nodjnao',
          foto: 'https://www.petz.com.br/blog/wp-content/uploads/2021/02/raca-de-cachorro-grande-2-1280x720.jpg'
        },
      ]}
      />
    </div>
  );
};

export default Home;
