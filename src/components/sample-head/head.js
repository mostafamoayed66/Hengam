import {Heading} from 'native-base'
import React from 'react'

function Head({title, style, fontWeight, size, mt = 1}) {
  return (
    <Heading size={size} fontWeight={fontWeight} style={style} mt={mt}>
      {title}
    </Heading>
  )
}

export default Head
