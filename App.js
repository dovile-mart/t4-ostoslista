import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const addButtonPressed = () => {
    setData([...data, {key:input}]);
    setInput('');
  }

  const clearButtonPressed = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={input} onChangeText={input => setInput(input)} />

      <View style={styles.buttonArea}>
        <Button title='ADD' onPress={addButtonPressed}/>
        <Button title='CLEAR' onPress={clearButtonPressed} />
      </View>
    
      <Text style={styles.text}>Shopping List</Text>

      <FlatList style={styles.list} 
        data={data} 
        renderItem={({item}) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    width: 200,
    marginTop: 100
  },
  buttonArea: {
    flexDirection: 'row',
    //justifyContent: 'space-around',
    padding: 20
  },
  text: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold'
  },
  list: {
    alignSelf: 'center',
    //textAlign: 'center',
    padding: 5
  }
});
