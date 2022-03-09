import {Box, Center, Text, NativeBaseProvider} from 'native-base'
import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

function DashboradSection({title, authentication}) {
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
            {title}
            {authentication ? authentication.email : ''}
          </Text>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
}

function Dashborad({navigation}) {
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      navigation.replace('SignInScreen')
    }
  }, [auth.authenticate])

  return auth.authenticate ? (
    <DashboradSection title="Welcome" authentication={auth} />
  ) : (
    <DashboradSection title="Redirecting to Login page" />
  )
}

export default Dashborad
