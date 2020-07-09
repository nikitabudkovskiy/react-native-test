import { isIphoneX, getStatusBarHeight, } from 'react-native-iphone-x-helper'

export const isPhoneX = isIphoneX()
export const statusBarHeight = getStatusBarHeight(true)