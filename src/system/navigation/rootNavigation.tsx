import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Pages } from 'app/system/helpers'
import { Login } from 'app/module/login/view/Login'
import { Pagination } from 'app/module/pagination/view/Pagination'

const Stack = createStackNavigator()

export const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator headerMode={undefined}>
      {/*<Stack.Screen name={Pages.login} component={Login} />*/}
      <Stack.Screen name={Pages.pagination} component={Pagination} />
    </Stack.Navigator>
  )
}
   