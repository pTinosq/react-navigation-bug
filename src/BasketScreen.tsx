import { NavigationContext } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function BasketScreen() {
  const navigation = useContext(NavigationContext)

  return (
    <View style={styles.main}>
      <Text style={styles.text}>Basket Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation?.navigate('AddNoteScreen')
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Go to Add Note Screen</Text>
      </TouchableOpacity>
      <Text style={{ color: 'white', fontSize: 16 }}>
        Everything works as expected until now. When you press the "go to add note screen" button you will notice the
        home screen in the background vanish briefly as the animation plays.
      </Text>
      <Text style={{ color: 'white', fontSize: 16, marginTop: 32 }}>
        It's especially obvious if you use swipe right to close the add note screen.
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#550000',
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
