import React, { Component } from 'react'
import RatingBox from './RatingBox'
import styled from 'styled-components'

class RatingSection extends Component {

  state = {
    selected: null,
    hovered: -1,
    descriptions: {
      0: "Strongly Disagree",
      1: "Slightly Disagree",
      2: "Neutral",
      3: "Slightly Agree",
      4: "Strongly Agree"
    }
  }

  changeHover = (value) => {
    if (this.state.selected === null) {
      this.setState({
        hovered: value
      })
    }
  }

  selectValue = value => {
    this.setState({
      selected: value,
      hovered: value
    })
  }

  render() {
    const { hovered, descriptions } = this.state;
    return (
      <Wrapper>
        <Description>{hovered !== -1 ? descriptions[hovered] : 'select a value'}</Description>
        <RatingBoxesWrapper>
          <RatingBox selectValue={this.selectValue} changeHover={this.changeHover} hovered={hovered} value={0} edge="left" />
          <RatingBox selectValue={this.selectValue} changeHover={this.changeHover} hovered={hovered} value={1} />
          <RatingBox selectValue={this.selectValue} changeHover={this.changeHover} hovered={hovered} value={2} />
          <RatingBox selectValue={this.selectValue} changeHover={this.changeHover} hovered={hovered} value={3} />
          <RatingBox selectValue={this.selectValue} changeHover={this.changeHover} hovered={hovered} value={4} edge="right" />
        </RatingBoxesWrapper>
      </Wrapper >
    )
  }
}

export default RatingSection

const Description = styled.p`
  margin: 2px 0 5px 0;
`

const RatingBoxesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`
const Wrapper = styled.div`
  display: column;
  text-align: center;
`