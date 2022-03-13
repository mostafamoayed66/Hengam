import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider} from 'react-redux'
import LoadingScreen from './screens/loadingScreen'
import DashboradScreen from './screens/dashboard/dashboradScreen'
import SignInScreen from './screens/signInScreen'
import Store from './store'

const Stack = createStackNavigator()

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoadingScreen">
          <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="DashboradScreen" component={DashboradScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
