import styled from '@emotion/styled'
import { COLOR_LIGHT } from '../config/styles'

export const Fieldset = styled.fieldset`
    border: 0;
    padding: 0;
    margin: 20px 0 20px;
`

export const Legend = styled.legend`
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
    font-size: 10px;
    color: ${COLOR_LIGHT};
    text-transform: uppercase;
    border-bottom: 1px solid #dbe0e2;
`
