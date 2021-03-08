import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default function Main() {
  const [total, setTotal] = useState(0);
  const [intervalAmount, setIntervalAmount] = useState(1000000000000);
  const [tapPower, setTapPower] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0)

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
      <Text style={styles.bigBlue}>{total}</Text>
      <Button
        onPress={() => {
          setTotal((prevTotal) => prevTotal + tapPower)
        }}
        title="More Cookies!"
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={ () => updateInterval()}>
          <View style={styles.buttons}>
            <Text>Auto tap</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => setTapPower((prev) => prev * 2)}>
          <View style={styles.buttons}>
            <Text>Tap power</Text>
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
    backgroundColor: 'blue',
    height: 50
  }
});