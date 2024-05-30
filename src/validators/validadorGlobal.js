import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => {
    return valor !== "" && valor !== null && valor !== undefined;
  },
  message: "O campo {PATH} não pode ser vazio",
});
