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
} from 'native-base'
import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {login} from '../actions/auth.actions'

function SignInScreen({navigation}) {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const [show, setShow] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const userLogin = () => {
    const user = {
      userEmail,
      userPassword,
    }

    dispatch(login(user))
  }

  if (auth.authenticate) {
    // console.log(auth.user)
    navigation.replace('Dashborad')
  }

  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1}>
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
            <Button mt="2" colorScheme="indigo" onPress={() => userLogin()}>
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
    </NativeBaseProvider>
  )
}

export default SignInScreen
