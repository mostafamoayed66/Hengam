import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider} from 'react-redux'
import {useColorScheme} from 'react-native'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import Loading from './screens/loading'
import Dashborad from './screens/dashboard/dashborad'
import SignIn from './screens/signIn/signIn'
import Store from './store'

const Stack = createStackNavigator()
dayjs.extend(calendar)
dayjs.extend(duration)
dayjs.extend(relativeTime)

function App() {
  const scheme = useColorScheme()
  return (
    <Provider store={Store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
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
