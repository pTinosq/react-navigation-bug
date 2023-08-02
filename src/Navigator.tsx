import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { StatusBar } from 'react-native'
import HomeScreen from './HomeScreen'
import BasketScreen from './BasketScreen'
import AddNoteScreen from './AddNoteScreen'

const Stack = createStackNavigator()

export default function Navigator() {
  const statusBarHeight = StatusBar.currentHeight
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

      <Stack.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          cardStyle: {
            marginTop: statusBarHeight,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          gestureDirection: 'vertical',
          cardOverlayEnabled: false,
        }}
      />

      <Stack.Screen
        name="AddNoteScreen"
        component={AddNoteScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureDirection: 'horizontal',
        }}
      />
    </Stack.Navigator>
  )
}
