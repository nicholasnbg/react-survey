import React, { Component } from 'react';
import SurveyHeader from './components/SurveyHeader'
import SurveyBody from './components/surveyBody/SurveyBody'
import styled from 'styled-components'
import './App.css';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Container>
          <SurveyHeader surveyHeading="Demo Survey" employeeName="By Nick Gray"></SurveyHeader>
          <SurveyBody />
        </Container>
      </AppWrapper>
    );
  }
}

export default App;

const Container = styled.div`
  margin: auto;
  max-width: 70vw;
`

const AppWrapper = styled.div`
  background: #F3EDEE;
  min-height: 100vh;
` 