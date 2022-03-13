import {
  Box,
  Center,
  Divider,
  FlatList,
  Heading,
  NativeBaseProvider,
} from 'native-base'
import React, {useEffect, useState} from 'react'
import {StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
import {DetailFlatList} from '../../components/detailFlatList'
import {Skeletone} from '../../components/skeletone'
import {dashboardRequest} from './dashboard-request'
// import formatDate from '../utils/formatDate'

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

function DashboradScreen() {
  const [data, setData] = useState([])
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (auth.authenticate) {
      const requestParams = {
        page: 1,
        workspace: 22,
      }
      dashboardRequest(requestParams).then(requestResult =>
        setData(requestResult),
      )
    }
  }, [auth])

  return (
    <NativeBaseProvider>
      <Box>
        {data !== undefined && data.length !== 0 ? (
          <Box>
            {console.log('data \n', JSON.stringify(data, undefined, 4))}
            <FlatList
              nestedScrollEnabled
              data={data.result}
              renderItem={({item}) => (
                <Box>
                  <Box style={styles.Header}>
                    <Heading size="sm">{item.date}</Heading>
                    <Heading size="sm">{item.total_tracked_time}</Heading>
                  </Box>
                  <Divider />
                  <DetailFlatList items={item} />
                </Box>
              )}
              keyExtractor={item => item.date}
            />
          </Box>
        ) : (
          <Center>
            <Skeletone />
            <Skeletone />
          </Center>
        )}
      </Box>
    </NativeBaseProvider>
  )
}

export default DashboradScreen
