import { View, StyleSheet } from "react-native";

// helpers
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      marginHorizontal: 24,
      marginTop: 36,
      backgroundColor: Colors.primary800,
      borderRadius: 8,
      elevation: 8,
      shadowColor: Colors.black500,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
    },
  });