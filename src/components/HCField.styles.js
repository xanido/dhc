import styled from '@emotion/styled'
import { FONT_FAMILY_SERIF } from '../containers/HCApp.styles'

export const FieldWrapper = styled.div`
  margin-bottom: 10px;
`

export const Label = styled.label`
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 3px;
`

export const Input = styled.input`
  font-family: ${FONT_FAMILY_SERIF};
  font-size: 16px;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #c3c4c3;
  display: block;
  width: 100%;
`
