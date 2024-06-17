import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>

      <View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{roundsNumber} </Text>
          rounds to guess the number
          <Text style={styles.highlight}> {userNumber}</Text>.
        </Text>
      </View>

      <PrimaryButton onPress={onStartNewGame}>START NEW GAME</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    marginVertical: 24,
    fontSize: 22,
    textAlign: "center",
    fontFamily: "open-sans",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
