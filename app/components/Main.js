import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Modal, Alert, Pressable } from 'react-native';


export default function Main() {
  const [total, setTotal] = useState(0);
  const [intervalAmount, setIntervalAmount] = useState(1000000000000);
  const [tapPower, setTapPower] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const intervalArray = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50];


  useEffect(() => {
    const autoIncrementer = setInterval(() => {
      setTotal((prevTotal) => prevTotal + 1)
    }, intervalAmount);
    return () => {
      clearInterval(autoIncrementer);
    }
  }, [intervalAmount])

  function updateInterval() {
    setIntervalAmount(intervalArray[currentIndex + 1]);
    setCurrentIndex((prev) => prev + 1)
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.bigBlue}>{total}</Text>
      <TouchableOpacity onPress={() => {
          setTotal((prevTotal) => prevTotal + tapPower)
        }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://test-projects-1.s3-us-west-1.amazonaws.com/cookie-removebg-preview.png',
          }}
        />

      </TouchableOpacity>
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={ () => {
          // updateInterval()
          setModalVisible(true)
          console.log('I was clicked')
        }}>
          <View style={styles.buttons}>
            <Text style={{color: 'white'}}>Auto tap</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => setTapPower((prev) => prev * 2)}>
          <View style={styles.buttons}>
            <Text style={{color: 'white'}}>Tap power</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808090',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10
  },
  buttons: {
    width: 100,
    backgroundColor: 'black',
    height: 50,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});