const express = require("express");
const mongoose = require("mongoose");
const dontenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://victorjoness:dgPdtx0YPATQwwEt@dsm.ebp3xnr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

const Book = mongoose.model("Book", {
  titulo: String,
  autor: String,
  img: String,
  descricao: String,
});

app.get("/livros", async (req, res) => {
  const livros = await Book.find();
  res.json(livros);
});

app.post("/livros", async (req, res) => {
  const novolivro = new Book(req.body);
  await novolivro.save();
  res.json(novolivro);
});

app.put("/livros/:id", async (req, res) => {
  const livroId = req.params.id;
  const updateLivro = req.body;

  try {
    const result = await Book.findByIdAndUpdate(livroId, updateLivro, {
      new: true,
    });
    res.json(result);
  } catch (error) {
    res.json({ error: "Erro ao atualizar o livro." });
  }
});

app.delete("/livros/:id", async (req, res) => {
  const livroId = req.params.id;
  try {
    const result = await Book.findByIdAndRemove(livroId);
    res.json(result);
  } catch (error) {
    res.json({ error: "Erro ao excluir o livro." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});
