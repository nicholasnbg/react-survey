import React, { Component } from 'react'
import RatingSection from './RatingSection'
import styled from 'styled-components'

class Question extends Component {
  state = {
    selectedValue: null,
    highlightTo: 0
  }


  render() {

    const { question } = this.props
    return (
      <Wrapper>
        <QuestionText>{question.text}</QuestionText>
        <RatingSection />
      </Wrapper>
    )
  }
}


export default Question

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  align-items: center;
  padding: 10px 10px;
`

const QuestionText = styled.p`
  font-weight: 500;
  width: 50%;
`

