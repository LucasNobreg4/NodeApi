import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: {
    type: String,
    required: [true, "O título do livro é obrigatório"],
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O(a) autor(a) é obrigatório"],
  },
  editora: {
    type: String,
    required: [true, "A editora é obrigatória"],
    enum: {
      values: ["casa do codigo", "Editora do escritor"],
      message: "A editora {VALUE} não é um valor permitodo",
    },
  },
  numeroPaginas: {
    type: Number,
    validate: {
      validator: (value) => {
        return value >= 10 && value <= 4000;
      },
      message:
        "O número de páginas deve ser maior ou igual a 10 e menor ou igual a 4000",
    },
  },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;
