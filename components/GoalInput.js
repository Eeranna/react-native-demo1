import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your future goal' 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
          <View style={styles.button}>
                <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
            </View> 
            <View style={styles.button}>
                <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0"/>
            </View>
          </View>
      </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        marginBottom: 24,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomColor: '#cccccc',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      button: {
        width: '40%',
        marginHorizontal: 8
      }
});