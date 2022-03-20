import {StyleSheet} from 'react-native'

export const baseStyles = StyleSheet.create({
  header: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowItem: {
    flex: 1,
    paddingHorizontal: 22,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rightRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  leftFooter: {
    flex: 1,
    paddingHorizontal: 10,
  },
  rightFooter: {
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c026d3',
    borderRadius: 70,
  },
  pressableItem: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#525252',
  },
})

export const Colors = {
  dark: 'black',
  light: 'white',
  muted300: '#d4d4d4',
  muted600: '#525252',
}

const lightStyleSheet = StyleSheet.create({
  text: {
    color: Colors.dark,
  },
  iconEdit: {
    color: Colors.muted600,
    fontSize: 28,
  },
  divider: {
    color: Colors.muted300,
  },
})

const darkStyleSheet = StyleSheet.create({
  text: {
    color: Colors.light,
  },
  iconEdit: {
    color: Colors.muted300,
    fontSize: 28,
  },
  divider: {
    color: Colors.muted600,
  },
})

export default function getStyleSheet(useDarkTheme) {
  return useDarkTheme ? darkStyleSheet : lightStyleSheet
}
