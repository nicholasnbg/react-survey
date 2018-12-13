import React from 'react'
import styled from 'styled-components'

const RatingBox = ({ selectValue, changeHover, hovered, value, edge }) => {
  const baseHue = 55
  const hoverHue = (baseHue - 7 * value)

  const showHover = value <= hovered;

  const onHover = (value) => {
    changeHover(value)
  }
  const onClick = () => {
    selectValue(value)
  }

  return (
    <Box
      onMouseEnter={() => onHover(value)}
      onMouseLeave={() => onHover(-1)}
      onClick={onClick}
      showHover={showHover}
      edge={edge} value={value}
      hoverHue={hoverHue} />
  )
}

export default RatingBox

const Box = styled.div`
  height: 40px;
  width: 40px;
  box-shadow:  1px 1px 2px 1px rgba(0, 0, 0, 0.22);
  margin: 0 1px 0 0;
  background-color: ${props => props.showHover ? `hsl(${props.hoverHue}, 100%, 50%)` : `none`};
  cursor: pointer;
  border-radius: ${props => {
    if (props.edge === "left") {
      return "50% 0 0 50%"
    } else if (props.edge === "right") {
      return "0 50% 50% 0"
    }
  }}
`