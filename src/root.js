import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {dummyData} from './api/dummyData';
import ListView from './components/listView';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    // api call
    try {
      setTimeout(() => {
        setData(dummyData);
      }, 2000);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boom Sports</Text>
      <ListView data={dummyData} loading={loading} error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 10},
  title: {
    alignSelf: 'center',
    fontWeight: '400',
    fontSize: 18,
    marginBottom: 10,
  },
});
export default App;
