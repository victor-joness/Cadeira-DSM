import React, {useState} from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const ModalLivroEdit = ({ onClose,livro, onUpdate }) => {
  const [id, setId] = useState(livro.id);
  const [titulo, setTitulo] = useState(livro.titulo);
  const [autor, setAutor] = useState(livro.autor);
  const [img, setImg] = useState(livro.img);
  const [descricao, setDescricao] = useState(livro.descricao);
  
  const handleUpdate = () => {
    const dadosAtualizados = {
      id: id,
      titulo: titulo,
      autor: autor,
      img: img,
      descricao: descricao
    };
    onUpdate(dadosAtualizados);
    onClose();
  };
  
  return(
  <Modal transparent visible={true} animationType="slide">
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Editar Livro</Text>
        <TextInput
          style={styles.input}
          placeholder="Novo Título"
          value={titulo}
          onChangeText={(text) => setTitulo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Novo Autor"
          value={autor}
          onChangeText={(text) => setAutor(text)}
        />
         <TextInput
          style={styles.input}
          placeholder="Novo Img"
          value={img}
          onChangeText={(text) => setImg(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nova Descrição"
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.modalButton} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalFechar} onPress={onClose}>
          <Text style={styles.buttonFechar}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
)};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  modalButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalFechar: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonFechar: {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
  }
});

export default ModalLivroEdit;
