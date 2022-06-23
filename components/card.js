import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../constant/color";

function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 350 ? 16 : 30,
    marginHorizontal: deviceWidth < 350 ? 16 : 24,
    padding: 16,
    backgroundColor: Colors.primary,
    borderRadius: 13,
    elevation: 8,
  },
});
