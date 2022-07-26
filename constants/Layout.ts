import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  defaultMargin: 10 ,
  defaultFontSize:20,
  dialogSpacingMargin:20,
}
