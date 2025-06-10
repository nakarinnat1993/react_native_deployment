import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';


const renderItem = ({ item, index }: { item: string; index: number }) => {
  console.log('Rendering item', index);
  return (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );
};

const FlatListLayout = () => {
  const items = React.useMemo(() => Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`), []);
  return (
    <FlatList
      data={items}
      keyExtractor={(_, index) => index.toString()}
      initialNumToRender={10}
      windowSize={5}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 5,
    backgroundColor: '#d0f0d0',
  },
});

export default FlatListLayout;