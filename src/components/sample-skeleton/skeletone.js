import React from 'react'
import {Skeleton, VStack, HStack, Center} from 'native-base'

function Skeletone() {
  return (
    <Center w="100%" my="2">
      <HStack
        w="90%"
        maxW="290"
        borderWidth="1"
        space={8}
        rounded="md"
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}
        mt="10"
        p="5">
        <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.200" />
        <VStack flex="3" space="4">
          <Skeleton startColor="darkBlue.300" />
          <Skeleton.Text />
          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
          </HStack>
        </VStack>
      </HStack>
    </Center>
  )
}

export default Skeletone
