import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Dashborad from './screens/Dashborad'
import SignInScreen from './screens/SignInScreen'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="Dashborad" component={Dashborad} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
