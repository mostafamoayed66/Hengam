import dayjs from 'dayjs'
import {
  Actionsheet,
  Divider,
  FlatList,
  Heading,
  HStack,
  NativeBaseProvider,
  useDisclose,
  VStack,
  Input,
  Text,
  View,
  Pressable,
} from 'native-base'
import React, {useEffect, useState} from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import {useSelector} from 'react-redux'
import {useTheme} from '@react-navigation/native'
import Skeletone from '../../components/sample-skeleton/skeletone'
import {durationFormat} from '../../utils/durationFormat'
import dashboardRequest from './request'
import getStyleSheet, {baseStyles} from './style'
import TimeItem from './timeItem'
import TimeEditorModal from './timeEditorModal'

function ItemHeader({date, total, theme}) {
  return (
    <HStack style={baseStyles.header}>
      <View>
        <Heading size="xs">
          <Text style={theme.text}>
            {dayjs(date).calendar(null, {
              sameDay: '[Today]',
              nextDay: '[Tomorrow]',
              nextWeek: 'dddd',
              lastDay: '[Yesterday]',
              lastWeek: 'dddd',
              sameElse: 'dddd',
            })}
          </Text>
          <Text style={theme.text}>, {dayjs(date).format('MMM DD')}</Text>
        </Heading>
      </View>
      <View>
        <Heading size="xs" style={theme.text}>
          {durationFormat(total)}
        </Heading>
      </View>
    </HStack>
  )
}

function ItemFooter({isDark}) {
  return (
    <View style={baseStyles.footer}>
      <HStack>
        <VStack style={baseStyles.leftFooter}>
          <Input
            px="5"
            placeholder="What are you going to do?"
            fontSize="16"
            color={isDark ? '#fff' : '#000'}
            variant="unstyled"
            onChangeText={text => console.log(text)}
          />
        </VStack>
        <Pressable
          style={baseStyles.rightFooter}
          onPress={() => console.log('footer click')}>
          <Ionicon name="play" color="#fff" size={28} />
        </Pressable>
      </HStack>
    </View>
  )
}

function onDeleteFunction(onClose) {
  onClose(true)
}

function onDuplicateFunction(onClose) {
  onClose(true)
}

function ItemActionsheet({isOpen, onClose, setShowModal, isDark}) {
  const theme = getStyleSheet(isDark)
  return (
    <View>
      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Actionsheet.Item
            startIcon={<Ionicon name="construct" color="#4243d7" size={20} />}
            onPress={() => setShowModal(true)}>
            <Text style={theme.text}>Edit</Text>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<Ionicon name="duplicate" color="#2b5555" size={20} />}
            onPress={() => onDuplicateFunction(onClose)}>
            <Text style={theme.text}>Duplicate</Text>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<Ionicon name="trash" color="#c3241f" size={20} />}
            onPress={() => onDeleteFunction(onClose)}>
            <Text style={theme.text}>Delete</Text>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  )
}

function DashboradScreen() {
  const {isOpen, onOpen, onClose} = useDisclose()
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState([])
  const auth = useSelector(state => state.auth)

  const {dark} = useTheme()
  const theme = getStyleSheet(dark)

  useEffect(() => {
    if (auth.authenticate) {
      const requestParams = {
        page: 1,
        workspace: 22,
      }
      console.log('data \n', 'JSON.stringify(data, undefined, 4)')
      dashboardRequest(requestParams).then(requestResult =>
        setData(requestResult),
      )
    }
  }, [auth])

  return (
    <NativeBaseProvider>
      {data !== undefined && data.length !== 0 ? (
        <View style={{flex: 1}}>
          <TimeEditorModal
            showModal={showModal}
            setShowModal={setShowModal}
            onCloseSheet={onClose}
          />
          <ItemActionsheet
            isOpen={isOpen}
            onClose={onClose}
            setShowModal={setShowModal}
            isDark={dark}
          />
          <FlatList
            width="100%"
            data={data.result}
            renderItem={({item}) => (
              <View>
                <ItemHeader
                  date={item.date}
                  total={dayjs.duration(item.total_tracked_time, 'second')}
                  theme={theme}
                />
                <Divider />
                <TimeItem
                  times={item.time_entries}
                  onOpenSheet={onOpen}
                  isDark={dark}
                />
              </View>
            )}
            keyExtractor={item => item.date}
          />
          <ItemFooter isDark={dark} />
        </View>
      ) : (
        <Skeletone />
      )}
    </NativeBaseProvider>
  )
}

export default DashboradScreen
