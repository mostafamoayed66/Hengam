import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomDrawer from '../components/customDrawer'
import Dashborad from '../screens/dashboard/dashborad'
import Reports from '../screens/reports'
import Messages from '../screens/messages'
import Moments from '../screens/moments'

const Drawer = createDrawerNavigator()

dayjs.extend(calendar)
dayjs.extend(duration)
dayjs.extend(relativeTime)

function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Dashborad"
        component={Dashborad}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Reports"
        component={Reports}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={Messages}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={Moments}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default AppStack
