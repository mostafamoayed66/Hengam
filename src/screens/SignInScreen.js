import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  NativeBaseProvider,
  Text,
  VStack,
  Image,
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
      navigation.replace('DashboradScreen')
    }
  }, [auth.authenticate])

  const [show, setShow] = useState(false)
  const [formData, setFormData] = React.useState({})
  const [errors, setErrors] = React.useState({})

  const validate = () => {
    if (formData.password === undefined) {
      setErrors({...errors, passwordReuired: 'password is required'})
      return false
    }
    if (formData.email === undefined) {
      setErrors({...errors, emailRequired: 'email is required'})
      return false
    }
    if (formData.password.length < 3) {
      setErrors({...errors, passwordShort: 'password is too short'})
      return false
    }

    return true
  }

  const onSubmit = () => {
    validate() ? dispatch(login(formData)) : console.log('Validation Failed')
  }

  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1}>
        <Image
          source={{
            uri: 'https://dev.hengam.tempserver.ir/logo192.png',
          }}
          alt="Hengam App"
          size={112}
        />
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <HeadLg title="Welcome" />
          <HeadXs title="Sign in to continue!" />
          <VStack space={3} mt="5">
            <FormControl isInvalid={'emailRequired' in errors}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                placeholder="Email"
                onChangeText={value => setFormData({...formData, email: value})}
              />

              {'emailRequired' in errors ? (
                <FormControl.ErrorMessage>{errors}</FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText>Email Required.</FormControl.HelperText>
              )}
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
                onChangeText={value =>
                  setFormData({...formData, password: value})
                }
              />
            </FormControl>
            <Button mt="6" colorScheme="indigo" onPress={onSubmit}>
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                Welcome to Hengom login.{' '}
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default SignInScreen
