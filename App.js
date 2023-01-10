import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textContainer}>Another piece of text</Text>
      </View>
      <Text style={styles.textContainer}>Hello World!</Text>
      <Button title='Tap Me!' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  }
});
