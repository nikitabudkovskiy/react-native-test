import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Pages } from 'app/system/helpers'
import { Login } from 'app/module/login/view/Login'
import { Pagination } from 'app/module/pagination/view/Pagination'
import { FirstFake } from 'app/module/tab/view/FirstFake'
import { SecondFake } from 'app/module/tab/view/SecondFake'
import { Home } from 'app/system/view/Home'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const tabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Pages.firstFake} component={FirstFake} />
      <Tab.Screen name={Pages.secondFake} component={SecondFake} />
    </Tab.Navigator>
  )
}

export const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator headerMode={undefined}>
      <Stack.Screen name={Pages.home} component={Home} />
      <Stack.Screen name={Pages.login} component={Login} />
      <Stack.Screen name={Pages.pagination} component={Pagination} />
      <Stack.Screen name={Pages.tabFake} component={tabNavigator} />
    </Stack.Navigator>
  )
}
   