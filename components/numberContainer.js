import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../constant/color";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    padding: 16,
    margin: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    maxWidth: '70%',
  },
  textInput: {
    fontSize: deviceWidth < 380 ? 26 : 40,
    color: Colors.secondary,
    fontWeight: "bold",
  },
});
