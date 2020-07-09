import React, { PureComponent } from 'react'
import { View, Text, } from 'react-native'
import { localization } from 'app/system/localization/localization'
import { styleSheetCreate, style, Color, } from 'app/system/helpers'

export class SecondFake extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {localization.list.tabSecondFake}
        </Text>
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
  })
})
