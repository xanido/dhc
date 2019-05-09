import styled from '@emotion/styled'
import { BREAKPOINT } from '../config/styles'

export const Column = styled.div`
  width: 100%;
`

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
  margin: 0 ${props => -props.gutter}px;

  > ${Column} {
    @media (min-width: ${BREAKPOINT}) {
      width: ${props => 100 / props.columns}%;
    }
    padding: 0 ${props => props.gutter}px
  }
`

Columns.defaultProps = {
  columns: 1,
  gutter: '10'
}
