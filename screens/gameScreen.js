import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

import NumberContainer from "../components/numberContainer";
import Title from "../components/title";
import PrimaryButton from "../components/primaryButton";
import Card from "../components/card";
import Textbox from "../components/textbox";
import { Ionicons } from "@expo/vector-icons";

function generateRandomNumber(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function gameScreen({ useNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, useNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([
    { key: initialGuess, value: initialGuess },
  ]);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === useNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, useNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < useNumber) ||
      (direction === "greater" && currentGuess > useNumber)
    ) {
      Alert.alert("Don't lie to me!!", "You know this is wrong.....", [
        { text: "retry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newNumber);
    setGuessRounds((previousGuess) => [
      { key: newNumber, value: newNumber },
      ...previousGuess,
    ]);
  }

  const guessRoundIndex = guessRounds.length;
  const marginTopValue = height < 380 ? 10 : 50;
  const viewContainerWidth = width > 500 ? 600 : 300;

  const content =
    height > width ? (
      <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.card}>
          <Textbox style={styles.textbox}>Higher or Lower ?</Textbox>
          <View style={{ flexDirection: "row" }}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={26} color="white" />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={26} color="white" />
            </PrimaryButton>
          </View>
        </Card>
      </>
    ) : (
      <>
        <View style={{ flexDirection: "row", alignItems: 'center' }}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={26} color="white" />
          </PrimaryButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={26} color="white" />
          </PrimaryButton>
        </View>
      </>
    );

  return (
    <View style={[styles.screen, { marginTop: marginTopValue }]}>
      <Title>Opponent's Guess</Title>
      {content}
      <FlatList
        data={guessRounds}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={item.key}>
            <View style={[styles.viewContainer, {width: viewContainerWidth}]}>
              <Text style={{ fontSize: 20 }}>#{guessRoundIndex - index}</Text>
              <Text style={{ fontSize: 20 }}>
                Opponent's Guess: {item.value}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default gameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    padding: 24,
    // marginTop: 50,
    margin: 10,
    alignItems: "center",
  },
  card: {
    padding: 25,
    marginBottom: 10,
  },
  textbox: {
    margin: 10,
    fontSize: 28,
    width: "100%",
  },
  viewContainer: {
    // width: 300,
    flexDirection: "row",
    backgroundColor: "#bebebe",
    marginVertical: 3,
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 20,
  },
});
