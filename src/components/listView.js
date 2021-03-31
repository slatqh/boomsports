import React from 'react';
import {FlatList, ActivityIndicator, Text} from 'react-native';
import {ItemRow} from './itemRow';

const ListView = props => {
  const {data, loading, error} = props;
  const renderItem = ({item}) => (
    <ItemRow name={item.name} tweet={item.tweet} />
  );
  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
export default ListView;
