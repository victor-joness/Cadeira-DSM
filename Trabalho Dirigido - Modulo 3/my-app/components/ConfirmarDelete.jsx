import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmarDelete = ({ onClose, livro, onDelete }) => {
  const handleDelete = () => {
    onDelete(livro);
    onClose();
  };

  return(
  <Modal transparent visible={true} animationType="slide">
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>Tem certeza de que deseja excluir?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.modalButton, styles.deleteButton]} onPress={handleDelete}>
            <Text style={styles.buttonText}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={onClose}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
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
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    marginRight: 5,
  },
  cancelButton: {
    backgroundColor: '#3498db',
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ConfirmarDelete;