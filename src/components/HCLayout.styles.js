import styled from '@emotion/styled'

export const Column = styled.div`
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
  margin: 0 ${props => -props.gutter}px;

  > ${Column} {
    @media (min-width: 800px) {
      width: ${props => 100 / props.columns}%;
    }
    padding: 0 ${props => props.gutter}px
  }
`

Row.defaultProps = {
  columns: 1,
  gutter: '10'
}
