import {
  StyleSheet,
  Text,
  View,
  Pressable
} from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
        <View style={styles.goalItem} key={props.index}>
        <Text style={styles.goalText}>{props.text}</Text>
        </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 2,
  },
});
