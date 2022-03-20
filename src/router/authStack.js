import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Splash from '../screens/splash'
import SignIn from '../screens/signIn/signIn'

const Stack = createStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
