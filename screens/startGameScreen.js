import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import PrimaryButton from "../components/primaryButton";
import Title from "../components/title";
import Card from "../components/card";
import Colors from "../constant/color";
import Textbox from "../components/textbox";

function StartGameScreen({ OnPicked }) {
  const [enteredText, setEnteredText] = useState("");

  const { height, width } = useWindowDimensions();

  function inputHandler(enterNumber) {
    setEnteredText(enterNumber);
  }

  function resetHandler() {
    setEnteredText("");
  }

  function confirmHandler() {
    const number = parseInt(enteredText);

    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number must be a integer and between 1 to 99.",
        [{ text: "Ok", style: "destructive", onPress: resetHandler }]
      );
      return;
    }
    OnPicked(number);
  }

  const marginTopValue = height < 380 ? 20 : 100;

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopValue }]}>
          <Title>Guess The Number</Title>
          <Card>
            <Textbox>Enter a Number</Textbox>
            <TextInput
              style={styles.textInput}
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={inputHandler}
              value={enteredText}
            />
            <View style={{ flexDirection: "row" }}>
              <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
              <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: 100,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 40,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 3,
    color: Colors.secondary,
    marginVertical: 10,
  },
});
