import {
  Box,
  Center,
  Divider,
  FlatList,
  Heading,
  NativeBaseProvider,
  Avatar,
  HStack,
  VStack,
  Spacer,
  Text,
  View,
  Actionsheet,
  useDisclose,
  Button,
} from 'native-base'
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {DetailFlatList} from '../../components/detailFlatList'
import {Skeletone} from '../../components/skeletone'
import {dashboardRequest} from './dashboard-request'
import {styles} from './dashboard-style'
// import formatDate from '../utils/formatDate'

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
            <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
              <Actionsheet.Content>
                <Box w="100%" h={60} px={4} justifyContent="center">
                  <Text fontSize="16" color="gray.500">
                    Albums
                  </Text>
                </Box>
                <Actionsheet.Item>Delete</Actionsheet.Item>
                <Actionsheet.Item>Share</Actionsheet.Item>
                <Actionsheet.Item>Play</Actionsheet.Item>
                <Actionsheet.Item>Favourite</Actionsheet.Item>
                <Actionsheet.Item>Cancel</Actionsheet.Item>
              </Actionsheet.Content>
            </Actionsheet>
          </Center>

          <FlatList
            width="100%"
            data={data.result}
            renderItem={({item}) => (
              <Box>
                <Box style={styles.Header}>
                  <Heading size="sm">{item.date}</Heading>
                  <Heading size="sm">{item.total_tracked_time}</Heading>
                </Box>
                <Divider />
                <DetailFlatList items={item} onOpenSheet={onOpen} />
              </Box>
            )}
            keyExtractor={item => item.date}
          />
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
