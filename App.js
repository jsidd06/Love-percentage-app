import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  const inputHandler = (text) => {
    setText(text);
  };

  const submitHandler = () => {
    console.log(text);
    setText("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Check Your Love 💖 Percentage!</Text>
      <Text style={styles.text}>Type Your Love Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Love Name"
        onChangeText={inputHandler}
      />
      <Button onPress={submitHandler} title="Check Now" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "80%",
    borderRadius: 10,
  },
});
