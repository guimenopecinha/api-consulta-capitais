
import express, { Request, Response } from "express";

const app = express();

const PORT = 3000;

const estados: Record<string, string> = {
  SP: "São Paulo",
  RJ: "Rio de Janeiro",
  MG: "Belo Horizonte",
  BA: "Salvador",
  AM: "Manaus",
  DF: "Brasília",
  AC: "Rio Branco"
};


app.get("/estados/:sigla", (req: Request, res: Response) => {

const sigla = String(req.params.sigla).toUpperCase();

  const capital = estados[sigla];

  if (!capital) {
    return res.status(404).json({
      erro: "Estado não encontrado."
    });
  }

  return res.status(200).json({
    sigla: sigla,
    capital: capital
  });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
