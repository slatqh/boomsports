import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import ListView from './components/listView';
import {twitterApi} from './api/twitterAPI';

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    getData();
  }, [search]);

  const getData = async () => {
    // api call
    if (search.length <= 2) {
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const res = await twitterApi(search);
      if (res === null) {
        return setError({message: 'ops, nothing was found'});
      }
      setData(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boom Sports</Text>
      <TextInput
        onChangeText={e => setSearch(e)}
        style={styles.textInput}
        clearButtonMode="while-editing"
      />
      <ListView data={data} loading={loading} error={error?.message} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 7},
  title: {
    alignSelf: 'center',
    fontWeight: '400',
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    paddingVertical: 10,

    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 7,
    padding: 7,
    marginBottom: 20,
  },
});
export default App;
