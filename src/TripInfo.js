import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';

const TripInfoContainer = styled.div`
  margin: 0;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default class TripInfoQuestions extends Component {
  render() {
    return (
      <TripInfoContainer>
        <Card
          primary
          title="Split a Trip"
          buttonText="Start Splittin'" />
      </TripInfoContainer>
    );
  }
}
