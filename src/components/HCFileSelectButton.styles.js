import styled from '@emotion/styled'
import VanillaHCField from './HCField'
import { Label, Input } from './HCField.styles'
import { COLOR_MUTED } from '../containers/HCApp.styles'
import { buttonStyles } from './HCButton'

export const HCField = styled(VanillaHCField)`
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
