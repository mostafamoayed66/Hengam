import React, {useEffect} from 'react'
import {Image, Text, Center, NativeBaseProvider} from 'native-base'

function SplashScreen({navigation}) {
  const navigateToSignIn = () => {
    navigation.replace('SignIn')
  }

  useEffect(() => {
    setTimeout(navigateToSignIn, 1000)
  }, [])

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Image
          source={require('../../assets/png/hengam.png')}
          alt="Hengam App"
          size={90}
        />
        <Text italic bold pt="3">
          Hengam App
        </Text>
      </Center>
    </NativeBaseProvider>
  )
}

export default SplashScreen
