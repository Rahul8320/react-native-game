import { View, Text, Pressable, StyleSheet } from "react-native";

function primaryButton({ children, onPress, style }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={[styles.buttonContainer, style]}
        onPress={onPress}
        android_ripple={{ color: "#DA70D6" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default primaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 5,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: "#8B008B",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    width: 120,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: 'bold',
  },
});
