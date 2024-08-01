import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const rooms = [
  { roomNumber: 'A101', capacity: 5, available: true },
  { roomNumber: 'A102', capacity: 10, available: false },
  { roomNumber: 'A103', capacity: 8, available: false },
  { roomNumber: 'A104', capacity: 10, available: true },
  { roomNumber: 'A105', capacity: 7, available: true },
];

const BookingScreen = ({ navigation, route }) => {
  const { roomNumber, studentNumber } = route.params;
  const [message, setMessage] = useState('');
  const [isAvailable, setIsAvailable] = useState('');

  const checkRoomAvailability = () => {
    const selectedRoom = rooms.find(room => room.roomNumber === roomNumber);

    if (!selectedRoom) {
      setMessage('Room not found.');
      return;
    }

    if (selectedRoom.available && selectedRoom.capacity >= studentNumber) {
      setMessage(`Room ${roomNumber} is available for ${studentNumber} people.`);
      setIsAvailable(true);
    } else if (!selectedRoom.available) {
      setMessage(`Room ${roomNumber} is not available.`);
      setIsAvailable(false);
    } else {
      setMessage(`Room ${roomNumber} does not have enough capacity for ${studentNumber} people.`);
      setIsAvailable(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Screen</Text>
      <Text style={styles.text}>Selected Room: {roomNumber}</Text>
      <Text style={styles.text}>Number of People: {studentNumber}</Text>
      <TouchableOpacity style={styles.button} onPress={checkRoomAvailability}>
        <Text style={styles.buttonText}>Check Availability</Text>
      </TouchableOpacity>
      {message ? <Text style={isAvailable ? styles.message : styles.errorMessage}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 18,
    marginTop: 16,
    color: 'green',
  },
  errorMessage: {
    fontSize: 18,
    marginTop: 16,
    color: 'red',
  },
});

export default BookingScreen;
