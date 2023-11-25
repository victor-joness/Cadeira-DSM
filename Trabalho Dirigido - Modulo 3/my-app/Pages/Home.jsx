import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import { setBooks } from "../Redux/actions";
import LivroItem from "../components/LivroItem";
import ModalLivro from "../components/ModalLivro";

const Home = ({ books, setBooks }) => {
  useEffect(() => {
    const fetchData = async () => {
      const data = [
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
      ];

      setBooks(data);
    };

    fetchData();
  }, [setBooks]);

  const [isAddModalVisivel, setAddModalVisivel] = useState(false);

  const handleAddBook = () => {
    console.log("Adicionar");
  }

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
        {books.map((item) => (
          <LivroItem
            key={item.id}
            titulo={item.titulo}
            autor={item.autor}
            img={item.img}
            descricao={item.descricao}
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
