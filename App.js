import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...courseGoals, 
      enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your course goal' 
          onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.galsContainer}>
        <Text>List of goals...</Text>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
      <View 
        style={{ 
          padding: 50, 
          flexDirection: 'row', 
          width: '80%', 
          height: 300,
          justifyContent: 'space-between',
          alignItems: 'stretch'}}>
      <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
          <Text>3</Text>
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   flex: 1,
   padding: 50, 
   paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  galsContainer: {
    flex: 5
  }
});
