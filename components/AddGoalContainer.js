import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Platform,
  Modal,
} from "react-native";
import { useState } from "react";

const AddGoalContainer = ({
  isAddModalVisible,
  addGoalHandler,
  closeModal,
}) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => setEnteredGoal(enteredText);

  return (
    <Modal visible={isAddModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          style={styles.textInput}
          placeholder="Enter course Goal"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonActions}>
          <Button
            title="Add"
            onPress={addGoalHandler.bind(this, enteredGoal)}
            color={Platform.OS === "ios" ? "white" : "blue"}
          />
          <Button
            title="Cancel"
            onPress={closeModal}
            color={Platform.OS === "ios" ? "white" : "blue"}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    width: "80%",
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    color: "#120438",
    fontWeight: "bold",
    fontSize: 20,
    padding: 15,
  },
  buttonActions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    gap: 10,
  },
});

export default AddGoalContainer;
