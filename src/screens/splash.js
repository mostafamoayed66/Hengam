import React, {useEffect} from 'react'
import {Spinner, HStack, Heading, Center, NativeBaseProvider} from 'native-base'

function SplashScreen({navigation}) {
  const navigateToSignIn = () => {
    navigation.replace('SignIn')
  }

  useEffect(() => {
    setTimeout(navigateToSignIn, 1000)
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

export default SplashScreen
