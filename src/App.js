import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider} from 'react-redux'
import Loading from './screens/loading'
import Dashborad from './screens/dashboard/dashborad'
import SignIn from './screens/signIn'
import Store from './store'

const Stack = createStackNavigator()

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loading">
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Dashborad" component={Dashborad} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
