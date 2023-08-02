// In App.js in a new project

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './Navigator'
import 'react-native-gesture-handler';

function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}

export default App
