// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Router} from '../configs/routes';
const Stack = createStackNavigator();
function main() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Router.HomeStack.screen}>
      <Stack.Screen
        name={Router.HomeStack.screen}
        component={Router.HomeStack.component}
      />
    </Stack.Navigator>
  );
}

function app() {
  return <NavigationContainer>{main()}</NavigationContainer>;
}

export default app;
