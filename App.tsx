import {LogBox, View} from 'react-native';
import React from 'react';
import Route from './src/routes/routes';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
]);
const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;
