import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, } from 'react-native'
import { styleSheetCreate, style, Color, windowWidth, } from 'app/system/helpers'
import { StackNavigationProp } from '@react-navigation/stack'
import { Pages } from 'app/system/helpers'

interface IProps {
  navigation: StackNavigationProp<any>
}

interface IState {

}

export class Home extends PureComponent<IProps,IState>{

  goToLogin = (): void => {
    this.props.navigation.push(Pages.login)
  }

  goToPagination = (): void => {
    this.props.navigation.push(Pages.pagination)
  }

  goToFakeTab = (): void => {
    this.props.navigation.push(Pages.tabFake)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.goToLogin}
        >
          <Text>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.goToPagination}
        >
          <Text>
            Pagination
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.goToFakeTab}
        >
          <Text>
            Fake Tab
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = styleSheetCreate({
  container: style.view({
    flex: 1,
    backgroundColor: Color.platinum,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  button: style.view({
    backgroundColor: Color.mayaBlue,
    width: windowWidth * 0.8,
    height: windowWidth * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.02,
    marginBottom: windowWidth * 0.05,
  })
})