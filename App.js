import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Platform,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => setEnteredGoal(enteredText);

  const addGoalHandler = () =>
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);

  const removeGoalHandler = (goalIndex) =>
    setGoals((currentGoals) =>
      currentGoals.filter((_, index) => index !== goalIndex)
    );

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          style={styles.textInput}
          placeholder="Enter course Goal"
          onChangeText={goalInputHandler}
        />
        <Button
          title="Add"
          onPress={addGoalHandler}
          color={Platform.OS === "ios" ? "white" : "blue"}
        />
      </View>

      <View style={styles.goalsContainer}>
        <Text>List of Goals.....</Text>
        <FlatList
          data={goals}
          renderItem={({ item, index }) => (
            <Pressable
              style={styles.goalStyle}
              android_ripple={{
                color: "#dddddd",
              }}
              onPress={() => removeGoalHandler(index)}
            >
              <Text style={styles.goalText} key={index}>
                {item}
              </Text>
            </Pressable>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 25,
    flexDirection: "column",
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    height: "auto",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
  textInput: {
    borderColor: "#cccc",
    borderRadius: 5,
    borderWidth: 1,
    width: "80%",
    padding: 10,
  },
  goalsContainer: {
    flex: 3,
    paddingVertical: 20,
    overflow: "scroll",
  },
  goalStyle: {
    marginVertical: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#5e0acc",
    borderRadius: 5,
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
