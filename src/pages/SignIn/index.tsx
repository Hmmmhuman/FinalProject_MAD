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
import {Button, Gap} from '../../component/atoms/index';
import {TextInput} from '../../component';
import {Llogo, IconHelp, Livin} from '../../assets/icons';

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
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={IconHelp} style={styles.iconimage} />
          </View>
          <Image source={Llogo} style={styles.image} />

          <Button
            label="LOGIN"
            color="#007bff"
            textColor="white"
            onPress={handleModalOpen}
          />
          <Gap height={15} />
          <Button label="SIGN UP" color="#007bff" textColor="white" />
        </View>
      </View>

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
            <Image source={Livin} style={styles.image} />

            <TextInput placeholder="Type your full name" />
            <Gap height={15} />
            <Button label="LOGIN" color="#007bff" textColor="white" />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleModalClose}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  header: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconimage: {
    height: 45,
    width: 45,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    height: 400,
    width: 400,
    padding: 25,
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
