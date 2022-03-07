import React from 'react'
import {Box, Heading, Center, NativeBaseProvider} from 'native-base'

function Dashborad() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Welcome Home
          </Heading>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Dashborad
