import {
  Box,
  View,
  Text,
  NativeBaseProvider,
  SectionList,
  Center,
} from 'native-base'
import {StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getDashboardInfo} from '../actions/main.actions'
import {Skeletone} from '../utils/Skeletone'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eafffe',
  },
  taskItem: {
    padding: 10,
    marginVertical: 15,
    fontSize: 16,
  },
  taskTitle: {
    backgroundColor: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    elevation: 4,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
  },
})

function Section({data}) {
  return (
    <NativeBaseProvider>
      <View>
        <Box safeArea px="2" w="100%">
          {/* {console.log('datails \n', JSON.stringify(data.allData, undefined, 4))} */}
          {data !== undefined ? (
            <SectionList
              sections={data.allData}
              renderItem={({item}) => (
                <Text style={styles.taskItem}>{item.title}</Text>
              )}
              renderSectionHeader={({section}) => (
                <Text style={styles.taskTitle}>{section.date}</Text>
              )}
              keyExtractor={item => item.id}
            />
          ) : (
            <Center>
              <Skeletone />
              <Skeletone />
            </Center>
          )}
        </Box>
      </View>
    </NativeBaseProvider>
  )
}

function DashboradScreen() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const main = useSelector(state => state.main)

  useEffect(() => {
    if (auth.authenticate) {
      const payload = {
        page: 1,
        workspace: 22,
      }
      dispatch(getDashboardInfo(payload))
    }
  }, [auth, dispatch])

  return <Section data={main} />
}

export default DashboradScreen
