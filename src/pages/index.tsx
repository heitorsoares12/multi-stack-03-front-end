import type { NextPage } from "next";
import Titulo from "../ui/components/titulo/titulo";
import Lista from "../ui/components/lista/lista";
import {
  Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import { useIndex } from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar
  } = useIndex();

  return (
    <div className="home">
      <Titulo
        titulo=""
        subtitulo={<p>Com um pequeno valor mensal, voce <br />pode <strong>ajudar uma causa virtualmente!!</strong> </p>}
      />

      <Lista pets={listaPets} onSelect={(pet) => setPetSelecionado(pet)} />

      <Dialog
        open={petSelecionado !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setPetSelecionado(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={"E-mail"}
              fullWidth
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Quantia por mês"}
              fullWidth
              type={"number"}
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={"primary"} variant={"outlined"}onClick={() => setPetSelecionado(null)}>
            Cancelar
          </Button>
          <Button color={"primary"} variant={"contained"} onClick={() => adotar()} >Confirmar doação</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={mensagem.length > 0}
        message={mensagem}
        autoHideDuration={2500}
        onClose={() => setMensagem("")}
      />
    </div>
  );
};

export default Home;
