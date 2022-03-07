import {Box, Center, Heading, NativeBaseProvider} from 'native-base'
import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

function Dashborad({navigation}) {
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      navigation.replace('SignInScreen')
    }
  }, [])

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="400"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Welcome {auth.user.userEmail}
          </Heading>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Dashborad
