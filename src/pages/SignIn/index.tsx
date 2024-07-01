import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import {BlurView} from '@react-native-community/blur'; // Import BlurView component

import {Llogo} from '../../assets/icons';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [blurAmount, setBlurAmount] = useState(0); // State for blur amount

  const handleModalOpen = () => {
    setModalVisible(true);
    setBlurAmount(10); // Apply blur when modal opens (adjust value for desired intensity)
  };

  const handleModalClose = () => {
    setModalVisible(!modalVisible);
    setBlurAmount(0); // Remove blur when modal closes
  };

  return (
    <View style={styles.centeredView}>
      <Image source={Llogo} style={styles.image} />

      {/* Apply blur effect using BlurView conditionally based on blurAmount */}
      {blurAmount > 0 && (
        <BlurView
          blurType="light"
          blurAmount={blurAmount}
          style={styles.blurView}
        />
      )}

      <Modal
        animationType="slide"
        transparent={true} // Maintain transparency for blur effect
        visible={modalVisible}
        onRequestClose={handleModalClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleModalClose}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={handleModalOpen}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: 400,
    width: 400,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  blurView: {
    position: 'absolute', // Ensure blur covers entire screen
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;
