import { NavigationContext } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function HomeScreen() {
  const navigation = useContext(NavigationContext)
  
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity onPress={() => {navigation?.navigate('BasketScreen')}} style={styles.button}>
        <Text style={styles.text}>Go to Basket Screen</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'gray',
    height: '100%',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
})
