import React, { useState } from 'react';
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Input your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="as Nakarin"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.result}>Hello {name || '...'}</Text>
      <Text style={styles.title}>Clicked: {count} times</Text>
      <Button title="Click!" onPress={() => setCount(count + 1)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#e7faff',
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
  },
  input: {
    height: 44,
    borderColor: '#c0ca33',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 18,
    backgroundColor: '#f9fbe7',
  },
  result: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
    color: '#33691e',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
