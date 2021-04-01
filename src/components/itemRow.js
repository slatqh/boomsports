import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ItemRow = props => {
  const {name, tweet} = props;
  return (
    <View style={styles.container}>
      <>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.tweet}>{tweet}</Text>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    borderRadius: 7,
    borderColor: '#c7bdbd',
    borderWidth: 1,
    // paddingHorizontal: 5,
  },
  name: {
    paddingVertical: 5,
    paddingLeft: 5,
    fontSize: 14,
    color: '#03A9F4',
  },
  tweet: {
    fontSize: 18,
    padding: 5,
  },
});
