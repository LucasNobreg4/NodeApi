import mongoose from "mongoose";
import ErroBase from "../Err/ErroBase.js";
import ErroValidacao from "../Err/ErroValidacao.js";
import NaoEncontrado from "../Err/NaoEncontrado.js";
import RequisicaoIncorreta from "../Err/RequisicaoIncorreta.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros (erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof NaoEncontrado) {
    erro.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;