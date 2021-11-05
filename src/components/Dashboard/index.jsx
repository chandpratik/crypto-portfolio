import React from 'react';
import { Container } from 'react-bootstrap';
import CardContainer from '../CardContainer';
import { Navigation } from '../Navbar';

export const Dashboard = () => {
  return (
    <Container className="mx-10">
      <Navigation />
      <CardContainer />
    </Container>
  );
};
