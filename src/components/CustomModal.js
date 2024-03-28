import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';
import { size } from '../styles/sizes';

interface Props {
  visible: boolean;
  closeModal:boolean;
  onClose: () => void;
  text: string;
  component?: React.ReactNode; // New prop for rendering a component
}

const CustomModal = ({ visible, onClose, component,closeModal }: Props) => {
  if (!visible) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      closeModal={closeModal}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {closeModal && <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>}
          
          {component && <View style={styles.componentContainer}>{component}</View>}
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
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    elevation: 5,
    width: '80%', 
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  closeText: {
    fontSize: 20,
  },
  componentContainer: {
    marginTop: 5, // Adjust spacing between text and component
  },
  modalContainerTitle:{
    textAlign:"center",
    width:"100%",
    borderBottomColor:"lightgray",
    borderBottomWidth:1,
    fontSize:size.fontSize.small
  }
});

export default CustomModal;
