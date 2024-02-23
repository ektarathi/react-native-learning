import { useState } from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

// components
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

// helpers
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
  const { width, height } = useWindowDimensions();

  const [enteredNumber, setEnteredNumber] = useState("");

  const numberedInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert popup
      Alert.alert(
        "Invalid number!",
        " Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: setEnteredNumber("") }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  const marginTopDistance = height < 430 ? 30 : 100;

  return (
    <ScrollView>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
      <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
        <Title>Guess my number</Title>
        <Card>
          <InstructionText> Enter a number </InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={numberedInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonSection}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonSection}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  buttonSection: {
    flex: 1,
  },
});
