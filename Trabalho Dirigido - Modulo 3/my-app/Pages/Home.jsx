import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import { setBooks } from "../Redux/actions";
import BookItem from "../components/BookItem";
import ModalBook from "../components/ModalBook";

const Home = ({ books, setBooks }) => {
  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          id: "1",
          title: "Livro 1",
          author: "Autor 1",
          description:
            "Lorem Ipsum is simply dummy has been the industry's standard dummy text ever since the 1500s",
        },
        {
          id: "2",
          title: "Livro 2",
          author: "Autor 2",
          description:
            "Lorem Ipsum is simply dummy has been the industry's standard dummy text ever since the 1500s",
        },
        {
          id: "3",
          title: "Livro 3",
          author: "Autor 3",
          description:
            "Lorem Ipsum is simply dummy has been the industry's standard dummy text ever since the 1500s",
        },{
            id: "4",
            title: "Livro 1",
            author: "Autor 1",
            description:
              "Lorem Ipsum is simply dummy has been the industry's standard dummy text ever since the 1500s",
          },
          {
            id: "5",
            title: "Livro 2",
            author: "Autor 2",
            description:
              "Lorem Ipsum is simply dummy has been the industry's standard dummy text ever since the 1500s",
          },
          {
            id: "6",
            title: "Livro 3",
            author: "Autor 3",
            description:
              "Lorem Ipsum is simply dummy has been the industry's standard dummy text ever since the 1500s",
          },
      ];

      setBooks(data);
    };

    fetchData();
  }, [setBooks]);

  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const handleAddBook = () => {
    console.log("Adicionar");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={() => setAddModalVisible(true)}>
        <Text style={styles.buttonText}>Adicionar Novos Livros</Text>
      </TouchableOpacity>

      <ModalBook
        visible={isAddModalVisible}
        onClose={() => setAddModalVisible(false)}
        onAdd={handleAddBook}
      />

      <Text style={styles.title}>Lista de Livros</Text>
      <View style={styles.booksContainer}>
        {books.map((item) => (
          <BookItem
            key={item.id}
            title={item.title}
            author={item.author}
            description={item.description}
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
  title: {
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
