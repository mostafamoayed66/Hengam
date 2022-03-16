import {
  Box,
  Center,
  Divider,
  FlatList,
  Heading,
  NativeBaseProvider,
  Text,
  View,
  Actionsheet,
  useDisclose,
  HStack,
  Pressable,
  VStack,
} from 'native-base'
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import dayjs from 'dayjs'
import Ionicon from 'react-native-vector-icons/Ionicons'
import {TextInput} from 'react-native'
import TimeItem from './timeItem'
import {Skeletone} from '../../components/skeletone'
import {dashboardRequest} from './request'
import {styles} from './style'
import {durationFormat} from '../../utils/durationFormat'

function ItemHeader({date, total}) {
  return (
    <HStack style={styles.header}>
      <Center>
        <Heading size="xs">
          <Text>
            {dayjs(date).calendar(null, {
              sameDay: '[Today]',
              nextDay: '[Tomorrow]',
              nextWeek: 'dddd',
              lastDay: '[Yesterday]',
              lastWeek: 'dddd',
              sameElse: 'dddd',
            })}
          </Text>
          <Text>, {dayjs(date).format('MMM DD')}</Text>
        </Heading>
      </Center>
      <Center>
        <Heading size="xs">{durationFormat(total)}</Heading>
      </Center>
    </HStack>
  )
}

function DashboradScreen() {
  const {isOpen, onOpen, onClose} = useDisclose()
  const [data, setData] = useState([])
  const auth = useSelector(state => state.auth)

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
        <View style={styles.page}>
          <Center>
            <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
              <Actionsheet.Content>
                <Actionsheet.Item
                  startIcon={
                    <Ionicon name="construct" color="#525252" size={28} />
                  }>
                  Edit
                </Actionsheet.Item>
                <Actionsheet.Item
                  startIcon={
                    <Ionicon name="duplicate" color="#525252" size={28} />
                  }>
                  Duplicate
                </Actionsheet.Item>
                <Actionsheet.Item
                  startIcon={
                    <Ionicon name="trash" color="#525252" size={28} />
                  }>
                  Delete
                </Actionsheet.Item>
                <Actionsheet.Item
                  startIcon={
                    <Ionicon name="close" color="#525252" size={28} />
                  }>
                  Cancel
                </Actionsheet.Item>
              </Actionsheet.Content>
            </Actionsheet>
          </Center>

          <FlatList
            width="100%"
            data={data.result}
            renderItem={({item}) => (
              <Box>
                <Box>
                  <ItemHeader
                    date={item.date}
                    total={dayjs.duration(item.total_tracked_time, 'second')}
                  />
                </Box>
                <Divider />
                <TimeItem times={item.time_entries} onOpenSheet={onOpen} />
              </Box>
            )}
            keyExtractor={item => item.date}
          />

          <Box style={styles.footer}>
            <HStack>
              <VStack style={styles.leftFooter}>
                <TextInput
                  placeholder="What are you going to do?"
                  style={styles.inputStyle}
                  onChangeText={text => console.log(text)}
                />
              </VStack>
              <Pressable
                style={styles.rightFooter}
                onPress={() => console.log('footer click')}>
                <Ionicon name="play" color="#fff" size={28} />
              </Pressable>
            </HStack>
          </Box>
        </View>
      ) : (
        <Center>
          <Skeletone />
          <Skeletone />
        </Center>
      )}
    </NativeBaseProvider>
  )
}

export default DashboradScreen
