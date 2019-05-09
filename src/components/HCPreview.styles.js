import styled from '@emotion/styled'
import { COLOR_PRIMARY, FONT_FAMILY_SERIF } from '../config/styles'

export const HCPreviewWrapper = styled.div`
  background: #fff;
`
export const PreviewHeader = styled.div`
  font-size: 30px;
  background: ${COLOR_PRIMARY};
  color: #fff;
  padding: 55px 110px 20px 20px;
  position: relative;
  font-size: 20px;
  font-family: ${FONT_FAMILY_SERIF};


  img {
    position: absolute;
    right: 15px;
    top: 13px;
    width: 80px;
    height: 105px;
    object-fit: cover;
    background: #fff;
    border: 1px solid #b3b3b3;
    border-bottom-width: 2px;
  }
`

export const PreviewCard = styled.div`
  padding: 20px;
`

export const PreviewLine = styled.div`
  border-bottom: 1px solid #eee;
  height: 1.4em;
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
`
export const PreviewLineLabel = styled.div`
  width: 75px;
  text-transform: uppercase;
  font-size: 10px;
  padding-bottom: 2px;
  flex-shrink: 0;
`

export const PreviewLineValue = styled.div`
  height: 100%;
  font-family: ${FONT_FAMILY_SERIF};
  overflow: hidden;
  text-overflow: ellipsis;
`
