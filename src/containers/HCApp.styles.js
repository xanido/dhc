import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const FONT_FAMILY_SANS_SERIF = "'Merriweather Sans', sans-serif"
export const FONT_FAMILY_SERIF = "'Merriweather', serif"
export const COLOR_PRIMARY = '#2c3e50'
export const COLOR_ACCENT = '#3498db'
export const COLOR_MUTED = '#627b8b'
export const COLOR_LIGHT = '#b0b8bc'

export const GlobalStyles = css`
  body {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`

export const Pane = styled.div`
  padding: 2em;
  display: flex;
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

  @media (min-width: 800px) {
    ${Pane}:first-of-type & {
      margin-right: 0;
      margin-left: auto;
    }
    ${Pane}:last-of-type & {
      margin-left: 0;
      margin-right: auto;
    }
  }
`

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${FONT_FAMILY_SANS_SERIF};
  color: ${COLOR_PRIMARY};
  margin: 0 -10px;

  > * {
    width: 100%;
    padding: 0 10px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    > * {
      width: 50%;
    }
  }
`

export const AppContainer = styled(Columns)`
  min-height: 100vh;
`

export const AppTitle = styled.h1`
  font-size: 28px;
  color: ${COLOR_PRIMARY};
`
