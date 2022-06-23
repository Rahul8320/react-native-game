import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Title from "../components/title";
import colors from "../constant/color";
import PrimaryButton from "../components/primaryButton";

function GameOverScreen({ userNumber, roundNumber, onStartGame }) {
  const { height, width } = useWindowDimensions();

  const marginTopValue = height < 380 ? 10 : 100;

  const content =
    width < height ? (
      <>
        <Title>Game over!</Title>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/game-over.jpg")}
          />
        </View>
        <Text style={styles.summery}>
          Your computer needs{" "}
          <Text style={styles.highlighted}> {roundNumber} </Text> rounds to
          guess the number
          <Text style={styles.highlighted}> {userNumber} </Text> .
        </Text>
        <View>
          <PrimaryButton onPress={onStartGame} style={styles.button}>
            Start New Game
          </PrimaryButton>
        </View>
      </>
    ) : (
      <View style={{flexDirection: 'row', width: 700, justifyContent: 'center',alignItems: 'center'}}>
        <View style={[styles.imageLandContainer, {width: 300}]}>
          <Image
            style={styles.image}
            source={require("../assets/images/game-over.jpg")}
          />
        </View>
          <View style={{ width: 350, alignItems: 'center' }}>
          <Title>Game over!</Title>
          <Text style={styles.summery}>
            Your computer needs{" "}
            <Text style={styles.highlighted}> {roundNumber} </Text> rounds to
            guess the number
            <Text style={styles.highlighted}> {userNumber} </Text> .
          </Text>
          <View>
            <PrimaryButton onPress={onStartGame} style={styles.button}>
              Start New Game
            </PrimaryButton>
          </View>
        </View>
      </View>
    );

  return (
    <View style={[styles.rootContainer, { marginTop: marginTopValue }]}>
      {content}
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: 100,
    padding: 15,
    alignItems: "center",
  },
  imageContainer: {
    height: deviceWidth < 380 ? 200 : 350,
    width: deviceWidth < 380 ? 200 : 350,
    borderRadius: deviceWidth < 380 ? 100 : 175,
    borderWidth: 3,
    borderColor: colors.gradient2,
    margin: 15,
    marginVertical: 23,
    overflow: "hidden",
  },
  imageLandContainer: {
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.gradient2,
    margin: 25,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summery: {
    fontSize: 24,
    textAlign: "center",
    color: "#bedd86",
    marginVertical: 24,
  },
  highlighted: {
    fontWeight: "bold",
    color: "#4c3946",
  },
  button: {
    width: 220,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});
