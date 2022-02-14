import styled from 'styled-components'
import { COLORS } from '../constants/colors'

const buildTextCss = props => {
  let css = `color: ${setTextColor(props)};`

  css += setMargins(props)

  return css
}

const setTextColor = options => {
  if (options.blackneutral) return COLORS.blackneutral
  if (options.white) return COLORS.white
  if (options.gray32) return COLORS.gray32
  if (options.black) return COLORS.black
  if (options.green) return COLORS.green
  else return COLORS.gray
}

const setMargins = ({
  mb = null,
  mt = null,
  ml = null,
  mr = null,
  mUnit = 'px',
}) => {
  const units = { px: 'px', percentage: '%' }
  const sizeUnit = units[mUnit]
  let css = ''

  if (mb) css += `margin-bottom: ${mb}${sizeUnit};`
  if (mt) css += `margin-top: ${mt}${sizeUnit};`
  if (ml) css += `margin-left: ${ml}${sizeUnit};`
  if (mr) css += `margin-right: ${mr}${sizeUnit};`

  return css
}

export const Text = styled.p`
-webkit-font-smoothing: antialiased;
${props => props.fontSize && `font-size: ${props.fontSize}`};
${props => props.fontBold && `font-weight: bold;`};
${props => buildTextCss(props)};

`

export const Button = styled.button`
  background: ${COLORS.white};
  border-radius: 4px;
  border: none;
  color: ${COLORS.gray32};
  font-weight: bold;
  height: 32px;
  cursor: pointer;
  padding: 0 20px;
  transition: all 0.2 ease;

  :hover {
    background: ${COLORS.purple5c};
    color: ${COLORS.white};
  }

  ${({isActive}) => isActive && `background: ${COLORS.gold};`}
`

export const Wrapper = styled.div`
 display: flex;
 ${props => props.gap && `gap: ${props.gap}`};
 ${props => props.wrap && `flex-wrap: wrap`};
 ${props => buildTextCss(props)};
`

