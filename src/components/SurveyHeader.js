import React from 'react'
import styled from 'styled-components'

const SurveyHeader = ({ logo, surveyHeading, employeeName }) => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src="https://via.placeholder.com/150" />
      </LogoWrapper>
      <Headings>
        <SurveyHeading>{surveyHeading}</SurveyHeading>
        <Employee>{employeeName}</Employee>
      </Headings>
    </HeaderWrapper>
  )
}

export default SurveyHeader

const HeaderWrapper = styled.div`
  display: grid;
  height: 150px;
  grid-template-columns: 80px 1fr;
`
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Headings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`

const SurveyHeading = styled.h2`
  margin: 0 0 10px 0;
`

const Employee = styled.h3`
  color: #C9C5C5;
  margin: 0;
`

const Logo = styled.img`
  width: 100%;
`