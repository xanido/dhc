import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Column, Columns } from '../components/HCLayout'
import { FONT_FAMILY_SANS_SERIF, COLOR_PRIMARY, BREAKPOINT } from '../config/styles'

export const GlobalStyles = css`
  body {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`

export const AppContainer = styled(Columns)`
  font-family: ${FONT_FAMILY_SANS_SERIF};
  color: ${COLOR_PRIMARY};
  min-height: 100vh;
`

AppContainer.defaultProps = {
  columns: 2,
  gutter: 0
}

export const AppTitle = styled.h1`
  font-size: 28px;
  color: ${COLOR_PRIMARY};
`

export const Pane = styled.div`
  padding: 40px;
  display: flex;
  height: 100%;
`

export const FormPane = css`
  background: #fff;
`

export const PreviewPane = css`
  background: #e1e4e7;
`

export const PaneContent = styled.div`
  max-width: 400px;
  width: 100%;
  margin: auto;

  @media (min-width: ${BREAKPOINT}) {
    ${AppContainer} > ${Column}:first-of-type & {
      margin-right: 0;
      margin-left: auto;
    }
    ${AppContainer} > ${Column}:last-of-type & {
      margin-left: 0;
      margin-right: auto;
    }
  }
`
