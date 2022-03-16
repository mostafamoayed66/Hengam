import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  RowItem: {
    flex: 1,
    paddingHorizontal: 22,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  PressableItem: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#525252',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#e5e5e5',
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5e5',
  },
  leftFooter: {
    flex: 1,
    paddingHorizontal: 10,
  },
  rightFooter: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d946ef',
    borderRadius: 60,
  },
  inputStyle: {
    fontSize: 16,
  },
})
