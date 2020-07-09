import React, { PureComponent } from 'react'
import {
  ScrollView,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import {
  windowWidth,
  styleSheetCreate,
  style,
  Color,
  ImageRepository,
  fonts,
} from 'app/system/helpers'
import { localization } from 'app/system/localization'
import { TextInputMask } from 'react-native-masked-text'

interface IProps {

}

interface IState {
  telephoneValue: string
  passwordValue: string
}

export class Login extends PureComponent<IProps,IState>{

  state = {
    telephoneValue: '',
    passwordValue: '',
  }

  onChangeTelephone = (telephoneValue: string): void => {
    this.setState({ telephoneValue })
  }
  onChangePassword = (passwordValue: string): void => {
    this.setState({ passwordValue })
  }

  render(): JSX.Element {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={ImageRepository.loginUnderHeader}
          style={styles.underHeader}
        />
        <Image
          source={ImageRepository.loginTopHeader}
          style={styles.topHeader}
        />
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            {localization.list.loginTitle}
          </Text>
          <View style={styles.devider} />
          <View style={styles.inputsContainer}>
            <TextInputMask
              type="custom"
              options={{
                mask: '+7 (999) 999-99-99'
              }}
              placeholder={localization.list.loginTelephoneInputPlaceholder}
              placeholderTextColor={Color.gainsboro}
              style={styles.phoneInput}
              keyboardType="numeric"
              value={this.state.telephoneValue}
              onChangeText={this.onChangeTelephone}
            />
            <Image
              style={styles.phone}
              source={ImageRepository.loginPhone}
              resizeMode="contain"
            />
          </View>
          <View style={styles.inputsContainer}>
            <TextInput
              maxLength={20}
              secureTextEntry
              style={styles.passwordInput}
              placeholder={localization.list.loginPasswordInputPlaceholder}
              placeholderTextColor={Color.gainsboro}
              value={this.state.passwordValue}
              onChangeText={this.onChangePassword}
            />
            <Image
              style={styles.lock}
              source={ImageRepository.loginLock}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPassword}>
              {localization.list.loginForgotPassword}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Image
              style={styles.loginBackgroundButton}
              source={ImageRepository.loginButtonBackground}
            />
            <Text style={styles.loginButtonText}>
              {localization.list.loginButton}
            </Text>
          </TouchableOpacity>
          <View style={styles.dontHaveAccountContainer}>
            <Text style={styles.dontHaveAccountText}>
              {localization.list.loginDontHaveAccount}
            </Text>
            <TouchableOpacity>
              <Text style={styles.dontHaveAccountSingUp}>
                {' ' + localization.list.loginSignUp}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = styleSheetCreate({
  container: style.view({
    flex: 1,
  }),
  underHeader: style.image({
    width: windowWidth,
    height: windowWidth * 0.4,
  }),
  topHeader: style.view({
    position: 'absolute',
    top: 0,
    width: windowWidth,
    height: windowWidth * 0.39,
  }),
  wrapper: style.view({
    marginTop: windowWidth * 0.12,
    paddingHorizontal: windowWidth * 0.06,
  }),
  title: style.text({
    fontFamily: fonts.AvenirNextCyrMedium,
    fontSize: windowWidth * 0.068,
    color: Color.black,
    marginBottom: windowWidth * 0.02,
  }),
  devider: style.view({
    backgroundColor: Color.mayaBlue,
    height: windowWidth * 0.007,
    width: windowWidth * 0.12,
    borderRadius: windowWidth * 0.012,
    marginBottom: windowWidth * 0.156,
  }),
  inputsContainer: style.view({
    height: windowWidth * 0.117,
    width: windowWidth * 0.88,
    marginBottom: windowWidth * 0.039,
    shadowColor: Color.platinumShadow,
    shadowOffset: {
      width: 0,
      height: windowWidth * 0.012,
    },
    shadowOpacity: windowWidth * 0.0014,
    shadowRadius: windowWidth * 0.073,
    elevation: windowWidth * 0.073,
  }),
  phoneInput: style.text({
    height: '100%',
    width: '100%',
    borderRadius: windowWidth * 0.01,
    backgroundColor: Color.white,
    fontFamily: fonts.AvenirNextCyrMedium,
    fontSize: windowWidth * 0.039,
    paddingLeft: windowWidth * 0.1,
    paddingRight: windowWidth * 0.05,
  }),
  phone: style.image({
    width: windowWidth * 0.03,
    height: windowWidth * 0.048,
    position: 'absolute',
    left: windowWidth * 0.043,
    top: windowWidth * 0.032,
    zIndex: 10,
  }),
  passwordInput: style.text({
    height: '100%',
    width: '100%',
    borderRadius: windowWidth * 0.01,
    backgroundColor: Color.white,
    fontFamily: fonts.AvenirNextCyrMedium,
    fontSize: windowWidth * 0.039,
    paddingLeft: windowWidth * 0.1,
    paddingRight: windowWidth * 0.05,
  }),
  lock: style.image({
    width: windowWidth * 0.036,
    height: windowWidth * 0.048,
    position: 'absolute',
    left: windowWidth * 0.043,
    top: windowWidth * 0.032,
    zIndex: 10,
  }),
  forgotPasswordContainer: style.view({
    marginBottom: windowWidth * 0.156,
  }),
  forgotPassword: style.text({
    color: Color.mayaBlue,
    fontSize: windowWidth * 0.034,
    fontFamily: fonts.AvenirNextCyrMedium,
    textAlign: 'right',
  }),
  loginButton: style.view({
    height: windowWidth * 0.117,
    width: windowWidth * 0.88,
    shadowColor: Color.platinumShadow,
    shadowOffset: {
      width: 0,
      height: windowWidth * 0.012,
    },
    shadowOpacity: windowWidth * 0.0014,
    shadowRadius: windowWidth * 0.073,
    elevation: windowWidth * 0.073,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: windowWidth * 0.048,
  }),
  loginButtonText: style.text({
    color: Color.white,
    fontSize: windowWidth * 0.041,
    fontFamily: fonts.AvenirNextCyrMedium,
  }),
  loginBackgroundButton: style.view({
    position: 'absolute',
    //@ts-ignore
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
    borderRadius: windowWidth * 0.01,
  }),
  dontHaveAccountContainer: style.view({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  dontHaveAccountText: style.text({
    fontSize: windowWidth * 0.039,
    color: Color.gainsboro,
    fontFamily: fonts.AvenirNextCyrMedium,
  }),
  dontHaveAccountSingUp: style.text({
    fontSize: windowWidth * 0.039,
    color: Color.mayaBlue,
    fontFamily: fonts.AvenirNextCyrMedium,
  }),
})