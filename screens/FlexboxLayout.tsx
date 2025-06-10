import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexboxLayout = () => {
  return (
    <>
        <View style={styles.container}>
            <View style={[styles.box, { backgroundColor: 'tomato' }]} />
            <View style={[styles.box, { backgroundColor: 'gold' }]} />
            <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
        </View>
        <View style={{ flexDirection: 'row'}}>
            <View style={{ backgroundColor: 'red', flex: 1, height: 100 }} />
            <View style={{ backgroundColor: 'green', flex: 2, height: 100 }} />
            <View style={{ backgroundColor: 'blue', flex: 1, height: 100 }} />
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default FlexboxLayout;
