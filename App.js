import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import AddGoalContainer from "./components/AddGoalContainer";

export default function App() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setIsAddModalVisible(false);
  };

  const removeGoalHandler = (goalIndex) =>
    setGoals((currentGoals) =>
      currentGoals.filter((_, index) => index !== goalIndex)
    );

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <Button
            title="Add Goal"
            color="#5e0acc"
            onPress={() => setIsAddModalVisible(true)}
          />
        </View>
        <AddGoalContainer
          isAddModalVisible={isAddModalVisible}
          addGoalHandler={addGoalHandler}
          closeModal={() => setIsAddModalVisible(false)}
        />
        <View style={styles.goalsContainer}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              marginBottom: 10,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            List of Goals.....
          </Text>
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 25,
    flexDirection: "column",
    flex: 1,
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
