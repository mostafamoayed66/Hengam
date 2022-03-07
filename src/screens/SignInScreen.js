import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  useToast,
} from 'native-base'
import React, {useState} from 'react'

function validateUser(userInfo, toast, navigation) {
  const user = true
  if (user) {
    navigation.navigate('Dashborad')
  } else {
    toast.show({
      title: 'Something went wrong',
      status: 'error',
      description: `E.${userInfo.userEmail} P.${userInfo.userPassword}\n Please create a support ticket from the support page`,
    })
  }
}

function SignInSection({navigation}) {
  const toast = useToast()
  const [show, setShow] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              placeholder="Email"
              onChangeText={email => setUserEmail(email)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Button
                  size="xs"
                  rounded="none"
                  w="1/6"
                  h="full"
                  onPress={() => setShow(!show)}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              }
              placeholder="Password"
              onChangeText={password => setUserPassword(password)}
            />
            {/* <Link alignSelf="flex-end" mt="1"> Forget Password? </Link> */}
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() =>
              validateUser({userPassword, userEmail}, toast, navigation)
            }>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              I am a new user.{' '}
            </Text>
            {/* <Link href="#">Sign Up</Link> */}
          </HStack>
        </VStack>
      </Box>
    </Center>
  )
}

function SignInScreen({navigation}) {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SignInSection navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  )
}

export default SignInScreen
