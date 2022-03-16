import {StyleSheet} from 'react-native'

export const Colors = {
  dark: 'black',
  light: 'white',
}

const lightStyleSheet = StyleSheet.create({
  text: {
    color: Colors.dark,
  },
  label: {
    color: Colors.dark,
    marginStart: 8,
    fontSize: 14,
  },
})

const darkStyleSheet = StyleSheet.create({
  text: {
    color: Colors.light,
  },
  label: {
    color: Colors.light,
    marginStart: 8,
    fontSize: 14,
  },
})

export default function getStyleSheet(useDarkTheme) {
  return useDarkTheme ? darkStyleSheet : lightStyleSheet
}
