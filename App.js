import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { generateRandomNumber } from "./helpers/helpers";

export default function App() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [recents, setRecents] = useState([]);

  const submitHandler = () => {
    if(!text || !text2) {
      alert('Both name is required!');
      return
    }
    setRecents((currentRecents) => [
      {
        firstUser: text,
        secondUser: text2,
        score: generateRandomNumber(60, 100),
      },
      ...currentRecents,
    ]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Check Your Love 💖 Percentage!</Text>
      <Text style={styles.text2}>Type Your Love Male Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name"
        placeholderTextColor='#f1f1f1'
        onChangeText={(text) => setText(text)}
      />
      <Text style={styles.text2}>Type Your Love Female Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Lover Name"
        placeholderTextColor='#f1f1f1'
        onChangeText={(text2) => setText2(text2)}
      />
      <Button onPress={submitHandler} title="Check Now" />

      <ScrollView style={styles.scrollView}>
        {recents.map((recent, i) => (
          <View key={i} style={styles.scrollviewItem}>
            <Text
              style={styles.love}
              
            >{`${recent.firstUser} Loves ${recent.secondUser} ${recent.score}%`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9A0680",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 70,
  },
  scrollView: {
    marginTop: 20,
    width: "100%",
  },
  scrollviewItem : {
    marginHorizontal : 20,
    alignItems: "center", 
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 5,
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "#FE7E6D",
    padding: 10,
    borderRadius: 5,
  },

  textInput: {
    borderColor: "#FEECE9",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "80%",
    borderRadius: 10,
    fontSize : 20,
    fontWeight : "bold",
    color : `#f1f1f1`
  },
  textInputPlaceHolder : {
    color : `#f1f1f1`
  },
  love: {
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
    width: "80%",
    backgroundColor: "#EF2F88",
    borderWidth: 1,
    fontSize: 20,
  },
});
