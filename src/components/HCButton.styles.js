import styled from '@emotion/styled'
import { COLOR_ACCENT, FONT_FAMILY_SANS_SERIF } from '../config/styles'
import { css } from '@emotion/core'
import Color from 'color'

export const buttonStyles = ({ bg = COLOR_ACCENT, width = 'auto' } = {}) => css`
  background: ${bg};
  font-size: 20px;
  color: #fff;
  padding: 10px;
  text-transform: none;
  font-family: ${FONT_FAMILY_SANS_SERIF};
  border-radius: 4px;
  border: 0;
  border-bottom: 2px solid rgba(0,0,0,0.2);
  cursor: pointer;
  width: ${width};

  &:hover {
    background: ${Color(bg).lighten(0.2).rgb().string()}
  }
  &:active {
    transform: translateY(1px);
  }
`

export const Button = styled.button`
  ${(props) => buttonStyles(props)};
`
