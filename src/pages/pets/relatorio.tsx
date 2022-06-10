import { NextPage } from "next";
import Titulo from "../../ui/components/titulo/titulo";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useRelatorio } from "../../data/hooks/pages/pets/useRelatorio";

const Relatorio: NextPage = () => {
  const { listaRelatorio } = useRelatorio();
  return (
    <>
      <Titulo
        titulo={"Relatório de Adoção"}
        subtitulo={<span>Veja a lista de pets adotados</span>}
      />
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 830, mx: "auto", p: { xs: 3, md: 5 } }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell align={"right"}>Valor mensal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaRelatorio.map((relatorio) => (
              <TableRow key={relatorio.id}>
                <TableCell>{relatorio.pet.nome}</TableCell>
                <TableCell>{relatorio.email}</TableCell>
                <TableCell align={"right"}>{relatorio.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Relatorio;
