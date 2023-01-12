import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goals, setGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setGoals(currentGoals => [
      ...currentGoals,
      {text: enteredGoalText, key: Math.random().toString()}
    ])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Goal!' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goaldText}>{itemData.item.text}</Text>
              </View>
            )
          }} 
          alwaysBounceVertical={false} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  goaldText: {
    color: 'white', 
  },
});
