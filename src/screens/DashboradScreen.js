import {Box, Center, Text, NativeBaseProvider} from 'native-base'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getDashboardInfo} from '../actions/main.actions'

function Section({authentication, dashboardInfo}) {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Text
            size="lg"
            fontWeight="400"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            {authentication ? authentication.email : ''}
            {'\n'}
            {dashboardInfo !== undefined ? (
              dashboardInfo.result.map(dataOrderByDate => {
                return dataOrderByDate.time_entries.map((timeEntrie, index) => (
                  <Text key={timeEntrie.title.concat(index)}>
                    {timeEntrie.title}
                  </Text>
                ))
              })
            ) : (
              <Text>Loading Data</Text>
            )}
          </Text>
        </Box>
      </Center>
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

  return <Section authentication={auth} dashboardInfo={main} />
}

export default DashboradScreen
