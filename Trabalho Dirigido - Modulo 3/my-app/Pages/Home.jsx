import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import { setBooks } from "../Redux/actions";
import LivroItem from "../components/LivroItem";
import ModalLivro from "../components/ModalLivro";

const Home = ({ books, setBooks }) => {
  //get de livros, não sei pq não ta funcionando as requissições no aplicativo, porem na web http://localhost:3001/livros funciona perfeitamente
  /*const livros = await axios.get("http://10.0.2.2:3001/livros"); */

  const [livros, setLivros] = useState([
    {
      id: "1",
      titulo: "Livro 1",
      autor: "Autor 1",
      img: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
      descricao:
        "Lorem Ipsum is simply dummy has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: "2",
      titulo: "Livro 2",
      autor: "Autor 2",
      img: "https://editoraelefante.com.br/wp-content/uploads/2020/03/54-ContraAmazon_externas-4.png",
      descricao:
        "Lorem Ipsum is simply dummy has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: "3",
      titulo: "Livro 3",
      autor: "Autor 3",
      img:"https://m.media-amazon.com/images/I/41Zdll5QWBL.jpg",
      descricao:
        "Lorem Ipsum is simply dummy has been the industry's standard dummy text ever since the 1500s",
    },{
        id: "4",
        titulo: "Livro 4",
        autor: "Autor 4",
        img: "https://m.media-amazon.com/images/I/51sew-A-dFL.jpg",
        descricao:
          "Lorem Ipsum is simply dummy has been the industry's standard dummy text ever since the 1500s",
      },
      {
        id: "5",
        titulo: "Livro 5",
        autor: "Autor 5",
        img: "https://m.media-amazon.com/images/I/51DCDy0meIL._AC_UF1000,1000_QL80_.jpg",
        descricao:
          "Lorem Ipsum is simply dummy has been the industry's standard dummy text ever since the 1500s",
      },
      {
        id: "6",
        titulo: "Livro 6",
        autor: "Autor 6",
        img: "https://images-na.ssl-images-amazon.com/images/I/51kAYMwbQIL._AC_SX368_.jpg",
        descricao:
          "Lorem Ipsum is simply dummy has been the industry's standard dummy text ever since the 1500s",
      },
  ]);

  const [isAddModalVisivel, setAddModalVisivel] = useState(false);

  const handleAddBook = (novoLivro) => {
    setLivros((livrosAntigos) => [...livrosAntigos, novoLivro]);
    setAddModalVisivel(false)
  }

  const handleUpdateLivro = (livroParaAtualizar) => {
     //put de livros, não sei pq não ta funcionando as requisições no aplicativo, porem na web http://localhost:3001/livros funciona perfeitamente
     // aqui temos o livroPara atualizar que ue ia dar put no banco de dados
  /*const request = await axios.put("http://10.0.2.2:3001/livros"); */

    setLivros(() =>
      livros.map((livro) =>
        livro.id === livroParaAtualizar.id ? livro = livroParaAtualizar : livro
      )
    );
  };

  const handleDeleteLivro = (livroParaExcluir) => {
     //remove de livros, aqui eu tenho o livro que eu quero excluir en~tao era so dar o delete no banco de dados atraves da requisição da api.
  /*const livros = await axios.get("http://10.0.2.2:3001/livros"); */
    setLivros(() =>livros.filter((livro) => livro.id !== livroParaExcluir.id)
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={() => setAddModalVisivel(true)}>
        <Text style={styles.buttonText}>Adicionar Novos Livros</Text>
      </TouchableOpacity>

      <ModalLivro
        visible={isAddModalVisivel}
        onClose={() => setAddModalVisivel(false)}
        onAdd={handleAddBook}
      />

      <Text style={styles.titulo}>Lista de Livros</Text>
      <View style={styles.booksContainer}>
        {livros.map((item) => (
          <LivroItem
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            autor={item.autor}
            img={item.img}
            descricao={item.descricao}
            onEditPress={handleUpdateLivro}
            onDeletePress={handleDeleteLivro}
          />
        ))}
      </View>
      <View style={styles.footer}>
            <Text style={{textAlign:"center", color:"#fff", marginTop:10}}>Feito por Victor Mesquita</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 16,
    marginTop: 16,
  },
  booksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    width: "100%",
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  footer: {
    width: "100%",
    height: 100,
    backgroundColor: "red",
    marginTop: 60,
  },
});

const mapStateToProps = (state) => ({
  books: state.books.books,
});

const mapDispatchToProps = {
  setBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
