import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const   ModalLivro = ({ visible, onClose, onAdd }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [img, setImg] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleAdd = () => {
    const novoLivro = {
      id: Math.random(9999),
      titulo,
      autor,
      img,
      descricao
    };
    onAdd(novoLivro);
  //post de livros, não sei pq não ta funcionando as requisições no aplicativo, porem na web http://localhost:3001/livros funciona perfeitamente
  /*const livros = await axios.post("http://10.0.2.2:3001/livros"); */
    setTitulo('');
    setAutor('');
    setImg('');
    setDescricao('');
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Adicionar Novo Livro</Text>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={titulo}
            onChangeText={(text) => setTitulo(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Autor"
            value={autor}
            onChangeText={(text) => setAutor(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Img"
            value={img}
            onChangeText={(text) => setImg(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
            multiline
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={styles.buttonText}>Adicionar Livro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ModalLivro;