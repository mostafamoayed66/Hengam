import React, {useEffect} from 'react'
import {Spinner, HStack, Heading, Center, NativeBaseProvider} from 'native-base'
import {useSelector} from 'react-redux'

function LoadingScreen({navigation}) {
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      navigation.replace('SignIn')
    } else {
      navigation.replace('Dashborad')
    }
  }, [])

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <HStack space={2} justifyContent="center">
          <Spinner color="cyan.500" />
          <Heading color="cyan.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
      </Center>
    </NativeBaseProvider>
  )
}

export default LoadingScreen
