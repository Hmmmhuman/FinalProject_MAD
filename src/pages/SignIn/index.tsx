import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {BlurView} from '@react-native-community/blur'; // Import BlurView component
import {Button, Gap} from '../../component/atoms/index';
import {TextInput} from '../../component';
import {Llogo, IconHelp, Livin, Exit} from '../../assets/icons';

const SignIn = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSignUp, setmodalVisibleSignUp] = useState(false);
  const [blurAmount, setBlurAmount] = useState(0); // State for blur amount

  const handleModalOpen = () => {
    setModalVisible(true);
    setBlurAmount(10); // Apply blur when modal opens (adjust value for desired intensity)
  };

  const handleModalOpenSignup = () => {
    setmodalVisibleSignUp(true);
    setBlurAmount(10);
  };

  const handleModalCloseSignUp = () => {
    setmodalVisibleSignUp(!modalVisibleSignUp);
    setBlurAmount(0);
  };

  const handleModalClose = () => {
    setModalVisible(!modalVisible);
    setBlurAmount(0); // Remove blur when modal closes
  };

  const handleiconpress = () => {};

  return (
    <View style={styles.centeredView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleiconpress}>
          <Image source={IconHelp} style={styles.iconimage} />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.container}>
          <Image source={Llogo} style={styles.image} />

          <Button
            label="LOGIN"
            color="#007bff"
            textColor="white"
            onPress={handleModalOpen}
          />
          <Gap height={15} />
          <Button
            label="SIGN UP"
            color="#007bff"
            textColor="white"
            onPress={handleModalOpenSignup}
          />
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
            <Pressable style={styles.exit}>
              <Image source={Exit} style={styles.exitimage} />
            </Pressable>
            <Image source={Livin} style={styles.image} />

            <TextInput placeholder="PASSWORD" />
            <Gap height={15} />

            <Pressable>
              <Button
                label="LOGIN"
                color="#007bff"
                textColor="white"
                onPress={() => navigation.navigate('page')}
              />
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true} // Maintain transparency for blur effect
        visible={modalVisibleSignUp}
        onRequestClose={handleModalCloseSignUp}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={styles.exit} onPress={handleModalCloseSignUp}>
              <Image source={Exit} style={styles.exitimage} />
            </Pressable>
            <Image source={Livin} style={styles.image} />

            <TextInput label="Nama Lengkap" placeholder="password..." />
            <Gap height={15} />
            <TextInput label="Email" placeholder="email..." />
            <Gap height={15} />
            <TextInput label="Nomor Rekening" placeholder="nomor rekening..." />
            <Gap height={15} />
            <Button label="SIGN UP" color="#007bff" textColor="white" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  exit: {
    alignItems: 'flex-end',
  },

  exitimage: {
    height: 35,
    width: 35,
  },

  header: {
    marginHorizontal: 20,
    paddingTop: 20,
    alignItems: 'flex-end',
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
  },
  modalView: {
    height: 400,
    width: 400,
    padding: 25,
    justifyContent: 'center',
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
