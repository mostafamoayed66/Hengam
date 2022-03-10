import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider} from 'react-redux'
import DashboradScreen from './screens/DashboradScreen'
import LoadingScreen from './screens/LoadingScreen'
import SignInScreen from './screens/SignInScreen'
import Store from './Store'

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
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="DashboradScreen" component={DashboradScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
