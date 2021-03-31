import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const ItemRow = props => {
  const {name, tweet} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.tweet}>{tweet}</Text>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    backgroundColor: '#ddd',
    paddingHorizontal: 5,
  },
  name: {
    paddingVertical: 5,
    fontSize: 14,
  },
  tweet: {
    fontSize: 18,
  },
});
