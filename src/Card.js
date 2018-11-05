import React, { Component } from 'react';
import styled from 'styled-components';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardModal>
        <CardHeader primary={this.props.primary}>
          <h3>{this.props.title}</h3>
        </CardHeader>
        <CardBody>
        </CardBody>
        <CardButton>{this.props.buttonText}</CardButton>
      </CardModal>
    )
  }
}

const CardModal = styled.div`
  background-color: #D9FFFD;
  margin: 0 auto;
  font-family: 'Bungee';
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 10%), 0px 10px 20px rgba(0, 0, 0, 10%);
`;

const CardHeader = styled.div`
  background-color: ${props => props.primary ? '#B29ACB' : '#18736D'};
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    color: #E9FFFE;
    font-size: 34px;
  }
`;

const CardBody = styled.div`
  height: 200px;
`;

const CardButton = styled.button`
  background-color: #38B6A6;
  border: none;
  color: #18736D;
  font-family: 'Bungee';
  font-size: 28px;
  padding: 20px 50px 20px 50px;
  margin: 1em;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 25%), 0 1px 3px rgba(0, 0, 0, 25%);
`;