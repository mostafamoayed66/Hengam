import {Heading} from 'native-base'
import React from 'react'

export function HeadLg({title}) {
  return (
    <Heading
      size="lg"
      fontWeight="600"
      color="coolGray.800"
      _dark={{
        color: 'warmGray.50',
      }}>
      {title}
    </Heading>
  )
}

export function HeadXs({title}) {
  return (
    <Heading
      mt="1"
      _dark={{
        color: 'warmGray.200',
      }}
      color="coolGray.600"
      fontWeight="medium"
      size="xs">
      {title}
    </Heading>
  )
}
