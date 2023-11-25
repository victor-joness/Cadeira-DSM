import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ModalLivroEdit from "./ModalLivroEdit";
import ConfirmarDelete from "./ConfirmarDelete";

const LivroItem = ({
  titulo,
  autor,
  img,
  descricao,
  onEditPress,
  onDeletePress,
}) => {
  const [isEditModalVisivel, setEditModalVisivel] = useState(false);
  const [isDeleteDialogVisivel, setDeleteDialogVisivel] = useState(false);

  const handleEditPress = () => {
    setEditModalVisivel(true);
  };

  const handleDeletePress = () => {
    setDeleteDialogVisivel(true);
  };

  return (
    <View style={styles.bookItem}>
      <View style={styles.bookDetails}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.autor}>{autor}</Text>
        <Image source={{ uri: img }} style={styles.image}></Image>
        <Text style={styles.descricao}>{descricao}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>

          {isEditModalVisivel && (
            <ModalLivroEdit onClose={() => setEditModalVisivel(false)} />
          )}

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={handleDeletePress}
          >
            <Text style={styles.buttonText}>Excluir</Text>
          </TouchableOpacity>

          {isDeleteDialogVisivel && (
            <ConfirmarDelete
              onClose={() => setDeleteDialogVisivel(false)}
              onDelete={onDeletePress}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookItem: {
    padding: 10,
    width: 150,
    height: 370,
    borderRadius: 10,
    backgroundColor: "#ddd",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  autor: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
  descricao: {
    fontSize: 16,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  image: {
    width: 130,
    height: 100,
    marginTop: 10,
    resizeMode: "contain",
    borderRadius: 10,
  },
});

export default LivroItem;
