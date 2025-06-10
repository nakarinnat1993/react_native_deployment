import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

const ScrollViewLayout = () => {
  return (
    <ScrollView style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 50, padding: 10 },
  item: {
    padding: 20,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
  },
});

export default ScrollViewLayout;