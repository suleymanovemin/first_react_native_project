import { StyleSheet, Text } from "react-native";
import Colors from "../../utils/colors";

const InstructionText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
