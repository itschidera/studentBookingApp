import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker"

const Dashboard = ({ navigation }) => {
  const [studentID, setStudentID] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Student ID"
        placeholderTextColor="grey"
        keyboardType="default"
        value={studentID}
        onChangeText={(text) => setStudentID(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="grey"
        keyboardType="default"
        value={studentName}
        onChangeText={(text) => setStudentName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Students"
        placeholderTextColor="grey"
        keyboardType="number-pad"
        value={studentNumber}
        onChangeText={(text) => setStudentNumber(text)}
      />

      <Picker
        selectedValue={roomNumber}
        style={styles.picker}
        onValueChange={(value) => setRoomNumber(value)}
      >
        <Picker.Item label="Select Room" value="" />
        <Picker.Item label="A101" value="A101" />
        <Picker.Item label="A102" value="A102" />
        <Picker.Item label="A103" value="A103" />
        <Picker.Item label="A104" value="A104" />
        <Picker.Item label="A105" value="A105" />
      </Picker>

      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => navigation.navigate('Bookings', {
          studentID,
          studentName,
          studentNumber: parseInt(studentNumber),
          roomNumber,
        })}
      >
        <Text style={styles.checkButtonText}>Check Availability</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoutButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#ff4d4d",
    borderRadius: 10,
    padding: 10,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
  },
  picker: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  checkButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  checkButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Dashboard;
