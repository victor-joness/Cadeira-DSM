import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BookItem = ({ title, author, description,onEditPress, onDeletePress }) => (
  <View style={styles.bookItem}>
    <View style={styles.bookDetails}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.descricao}>{description}</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={onDeletePress}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  bookItem: {
    padding: 10,
    width: 150,
    height: 260,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  author: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  descricao: {
    fontSize: 16,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default BookItem;