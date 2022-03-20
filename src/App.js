import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import {Provider, useSelector} from 'react-redux'
import {useColorScheme} from 'react-native'
import Store from './store'
import AuthStack from './router/authStack'
import AppStack from './router/appStack'

function AppNavigate() {
  const scheme = useColorScheme()
  const auth = useSelector(state => state.auth)
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      {auth.authenticate ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

function App() {
  return (
    <Provider store={Store}>
      <AppNavigate />
    </Provider>
  )
}

export default App
