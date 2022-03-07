import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {Provider} from 'react-redux'
import {Store} from './Store'
import Dashborad from './screens/Dashborad'
import SignInScreen from './screens/SignInScreen'

const Stack = createStackNavigator()

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashborad">
          <Stack.Screen name="Dashborad" component={Dashborad} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
