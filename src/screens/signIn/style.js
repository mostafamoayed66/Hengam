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
    marginStart: 5,
    fontSize: 14,
  },
  topLabel: {
    color: Colors.dark,
  },
  errorLabel: {
    color: '#f87171',
    marginStart: 10,
    fontSize: 14,
  },
  helperLabel: {
    color: '#a3a3a3',
    marginStart: 5,
    fontSize: 12,
  },
})

const darkStyleSheet = StyleSheet.create({
  text: {
    color: Colors.light,
  },
  label: {
    color: Colors.light,
    marginStart: 5,
    fontSize: 14,
  },
  topLabel: {
    color: Colors.light,
  },
  errorLabel: {
    color: '#f87171',
    marginStart: 10,
    fontSize: 14,
  },
  helperLabel: {
    color: '#a3a3a3',
    marginStart: 5,
    fontSize: 12,
  },
})

export default function getStyleSheet(useDarkTheme) {
  return useDarkTheme ? darkStyleSheet : lightStyleSheet
}
