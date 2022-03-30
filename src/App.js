import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screens from './screens/_index';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName={screens[0].key}>
      {screens.map((s) => <Stack.Screen name={s.key} key={s.key} component={s.component} />)}
    </Stack.Navigator>
  </NavigationContainer>);
};

export default App;
