import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/startGameScreen";
import GameScreen from "./screens/gameScreen";
import GameOverScreen from "./screens/gameOverScreen";
import Colors from "./constant/color";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [confirmNumber, setConfirmNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRound] = useState(0);

  // const [fontLoaded] = useFonts({
  //   "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  //   "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  // });

  // if (!fontLoaded) {
  //   <AppLoading />;
  // }

  function pickedNumberHandler(pickedNumber) {
    setConfirmNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(roundNumber) {
    setGameIsOver(true);
    setGuessRound(roundNumber);
  }

  function startNewGameHandler() {
    setConfirmNumber(null);
    setGuessRound(0);
  }

  let screen = <StartGameScreen OnPicked={pickedNumberHandler} />;

  if (confirmNumber) {
    screen = (
      <GameScreen useNumber={confirmNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && confirmNumber) {
    screen = (
      <GameOverScreen
        userNumber={confirmNumber}
        roundNumber={guessRound}
        onStartGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light"/>
      <LinearGradient
        colors={[Colors.gradient1, Colors.gradient2]}
        style={styles.rootContainer}
      >
        <ImageBackground
          source={require("./assets/images/background-image.jpg")}
          resizeMode="cover"
          style={styles.rootContainer}
          imageStyle={styles.imageBackground}
        >
          <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.2,
  },
});
