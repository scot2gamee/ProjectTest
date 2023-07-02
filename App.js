import {View, Text, TextInput} from 'react-native';
import React, {useEffect} from 'react';
import styles from './stylesApp';
import {TestAPI} from './src/action';
const App = () => {
  useEffect(() => {
    testAPI();
  }, []);
  async function testAPI() {
    const test = await TestAPI();
    if (test) {
      console.log(test?.main);
    }
  }
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
};

export default App;
