import React from 'react'
import styled from 'styled-components'

const SegmentHeader = ({ segmentName }) => {
  return (
    <Wrapper>
      <h3>{segmentName}</h3>
    </Wrapper>
  )
}

export default SegmentHeader


const Wrapper = styled.div`
  height: 90px;
  padding: 5px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow:  2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`