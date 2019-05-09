import styled from '@emotion/styled'
import VanillaField from './Field'
import { Label, Input } from './Field.styles'
import { COLOR_MUTED } from '../config/styles'
import { buttonStyles } from './Button'

export const Field = styled(VanillaField)`
  > ${Input} {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  > ${Input} + ${Label} {
    ${buttonStyles({ bg: COLOR_MUTED })};
    text-align: center;
  }
  > ${Input}:active + ${Label},
  > ${Input}:focus + ${Label} {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }
`
