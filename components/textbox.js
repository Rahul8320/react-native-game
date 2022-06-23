import { Text, StyleSheet } from "react-native";
import Colors from "../constant/color";

function Textbox({ children, style }) {
  return <Text style={[styles.textbox, style]}>{children}</Text>;
}

export default Textbox;

const styles = StyleSheet.create({
  textbox: {
    color: Colors.secondary,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
