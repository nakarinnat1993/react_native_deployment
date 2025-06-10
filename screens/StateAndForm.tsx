import React, { useState, useCallback } from 'react';
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';

interface NameInputProps {
  name: string;
  onNameChange: (name: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ name, onNameChange }) => (
  <View style={styles.inputSection}>
    <Text style={styles.label}>Input your name:</Text>
    <TextInput
      style={styles.input}
      placeholder="as Nakarin"
      value={name}
      onChangeText={onNameChange}
    />
    <Text style={styles.result}>Hello {name || '...'}</Text>
  </View>
);

interface CounterProps {
  count: number;
  onIncrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, onIncrement }) => (
  <View style={styles.counterSection}>
    <Text style={styles.title}>Clicked: {count} times</Text>
    <Button title="Click!" onPress={onIncrement} />
  </View>
);

const StateAndTextInput: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NameInput name={name} onNameChange={setName} />
      <Counter count={count} onIncrement={handleIncrement} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#e7faff',
    justifyContent: 'center',
  },
  inputSection: {
    marginBottom: 40,
  },
  counterSection: {
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    height: 44,
    borderColor: '#c0ca33',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 18,
    backgroundColor: '#f9fbe7',
    marginBottom: 16,
  },
  result: {
    fontSize: 22,
    color: '#33691e',
    fontWeight: '500',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default StateAndTextInput;
