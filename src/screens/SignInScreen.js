import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../actions/auth.actions'
import {HeadLg, HeadXs} from '../utils/Heads'

function SignInScreen({navigation}) {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (auth.authenticate) {
      navigation.replace('Dashborad')
    }
  }, [auth.authenticate])

  const [show, setShow] = useState(false)
  const [email, setUserEmail] = useState('')
  const [password, setUserPassword] = useState('')

  const userLogin = () => {
    const user = {
      email,
      password,
    }

    if (password.length > 3) {
      dispatch(login(user))
    } else {
      console.log('SignInScreen \n', 'password.length < 3 Wait for 3 second')
    }
  }

  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <HeadLg title="Welcome" />
          <HeadXs title="Sign in to continue!" />

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input
                placeholder="Email"
                onChangeText={userEmail => setUserEmail(userEmail)}
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
                onChangeText={userPassword => setUserPassword(userPassword)}
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
