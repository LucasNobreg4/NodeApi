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
  },
  numeroPaginas: {
    type: Number,
    min: [10, "O número de páginas deve ser maior ou igual a 1"],
    max: [4000, "O número de páginas deve ser menor ou igual a 1000"],
  },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;
