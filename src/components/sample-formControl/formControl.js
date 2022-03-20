import React from 'react'
import {FormControl, Text, Heading} from 'native-base'

function formControl({title, theme, helperText, error, children}) {
  return (
    <FormControl isInvalid={error !== undefined}>
      <FormControl.Label>
        <Heading style={theme.label}>{title}</Heading>
      </FormControl.Label>
      {children}
      {error !== undefined ? (
        <FormControl.ErrorMessage>
          <Text style={theme.errorLabel}>{error}</Text>
        </FormControl.ErrorMessage>
      ) : (
        <FormControl.HelperText>
          <Text style={theme.helperLabel}>{helperText}</Text>
        </FormControl.HelperText>
      )}
    </FormControl>
  )
}

export default formControl
