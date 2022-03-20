import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  NativeBaseProvider,
  Text,
  VStack,
  Image,
} from 'native-base'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useTheme} from '@react-navigation/native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import {login} from '../../actions/auth.actions'
import Head from '../../components/sample-head/head'
import FormControl from '../../components/sample-formControl/formControl'
import getStyleSheet from './style'

function SignInScreen({navigation}) {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const {dark} = useTheme()
  const theme = getStyleSheet(dark)

  const [show, setShow] = useState(false)
  const [formData, setFormData] = React.useState({})
  const [errors, setErrors] = React.useState({
    emailRequired: undefined,
    passwordRequired: undefined,
  })
  const [status, setStatus] = React.useState({
    statusEmail: false,
    statusPassword: false,
  })

  useEffect(() => {
    if (auth.authenticate) {
      navigation.replace('Dashborad')
    }
  }, [auth.authenticate])

  const validate = () => {
    if (!status.statusEmail && !status.statusPassword) {
      setErrors({
        emailRequired: 'Email is required',
        passwordRequired: 'Password is required',
      })
    } else {
      if (!status.statusEmail) {
        setErrors({
          emailRequired: 'Email is required',
        })
      }
      if (!status.statusPassword) {
        setErrors({
          passwordRequired: 'Password is required',
        })
      }
    }

    return status.statusPassword && status.statusEmail
  }

  const onSubmit = () => {
    formData.email && formData.email.length > 1
      ? (status.statusEmail = true)
      : (status.statusEmail = false)

    formData.password && formData.password.length > 1
      ? (status.statusPassword = true)
      : (status.statusPassword = false)

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
          <Head
            title="Welcome"
            style={theme.topLabel}
            fontWeight="700"
            size="lg"
          />
          <Head
            title="Sign in to continue!"
            style={theme.topLabel}
            fontWeight="medium"
            size="xs"
            mt="1"
          />
          <VStack space={3} mt="5">
            <FormControl
              title="Email"
              theme={theme}
              helperText="Email Required."
              error={errors.emailRequired}>
              <Input
                placeholder="Email"
                px="4"
                color={dark === true ? '#fff' : '#000'}
                onChangeText={value => setFormData({...formData, email: value})}
              />
            </FormControl>
            <FormControl
              title="Password"
              theme={theme}
              helperText="Password Required."
              error={errors.passwordRequired}>
              <Input
                type={show ? 'text' : 'password'}
                placeholder="Password"
                px="4"
                color={dark === true ? '#fff' : '#000'}
                onChangeText={value =>
                  setFormData({...formData, password: value})
                }
                InputRightElement={
                  <Button
                    size="xs"
                    rounded="none"
                    w="1/6"
                    h="full"
                    onPress={() => setShow(!show)}>
                    {show ? (
                      <Ionicon name="eye" color="#fafafa" size={24} />
                    ) : (
                      <Ionicon name="eye-off" color="#fafafa" size={24} />
                    )}
                  </Button>
                }
              />
            </FormControl>
            <Button mt="6" colorScheme="indigo" onPress={onSubmit}>
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text style={theme.text}>Welcome to Hengom login.</Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default SignInScreen
