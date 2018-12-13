import React, { Component } from 'react'
import SegmentHeader from './SegmentHeader'
import Question from '../question/Question'
import styled from 'styled-components'

class SurveyBody extends Component {
  state = {
    questions: [
      {
        text: "Nick Gray would be an awesome addition to the team.",
        required: true
      }
    ]
  }

  render() {
    return (
      <Wrapper>
        <SegmentHeader segmentName="About Employee" />
        {this.state.questions.map((q, i) => (
          <Question question={q} key={i} />
        ))}
      </Wrapper>
    )
  }
}

export default SurveyBody

const Wrapper = styled.div`
  background: #FFFFFF;
  border-radius: 5px;
  width: 100%;
`