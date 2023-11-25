import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const ModalLivroEdit = ({ onClose }) => (
  <Modal transparent visible={true} animationType="slide">
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Editar Livro</Text>
        <TextInput
          style={styles.input}
          placeholder="Novo Título"
        />
        <TextInput
          style={styles.input}
          placeholder="Novo Autor"
        />
        <TextInput
          style={styles.input}
          placeholder="Nova Descrição"
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.modalButton} onPress={onClose}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalFechar} onPress={onClose}>
          <Text style={styles.buttonFechar}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

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
