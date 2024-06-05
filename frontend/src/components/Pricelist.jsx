// App.js
import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 5rem;
  margin-bottom: 40px;
  text-align: center;
  margin-top: 10%;
`;

const Card = styled.div`
  background: #000;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 10px;
  margin: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  height: 600px; /* Adjusted height */
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.3); /* Adjusted shadow */
  }

  @media(min-width: 768px) {
    width: 400px;
  }
`;

const CardTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 2.5rem;
`;

const Price = styled.p`
  font-size: 2.7rem;
  margin: 20px 0 40px; /* Added margin for more space */
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: 10px 0;
  font-size: 1.4rem;
`;

const Feature = styled.div`
  flex: 1;
  &:first-child {
    text-align: left;
  }
  &:last-child {
    text-align: right;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 20px 40px; /* Increased padding */
  margin-top: 70px; /* More margin to push it down */
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 1.5rem; /* Increased font size */

  &:hover {
    background-color: #555;
    transform: scale(1.1);
  }
`;

const Pricelist = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '20px' }}>
      <Title>Pricelist</Title>
      <Container>
        <Card>
          <CardTitle>STANDARD</CardTitle>
          <Price>400$</Price>
          <FeatureList>
            <Feature>Duration:</Feature>
            <Feature>3 hours</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Lots Of Photos:</Feature>
            <Feature>60 - 80</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Retouching:</Feature>
            <Feature>25 items</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Finishing:</Feature>
            <Feature>10 days</Feature>
          </FeatureList>
          <Button>Book Appointment</Button>
        </Card>
        <Card>
          <CardTitle>PREMIUM</CardTitle>
          <Price>550$</Price>
          <FeatureList>
            <Feature>Duration:</Feature>
            <Feature>4 hours</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Lots Of Photos:</Feature>
            <Feature>85 - 90</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Retouching:</Feature>
            <Feature>40 items</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Finishing:</Feature>
            <Feature>7 days</Feature>
          </FeatureList>
          <Button>Book Appointment</Button>
        </Card>
        <Card>
          <CardTitle>PRO</CardTitle>
          <Price>600$</Price>
          <FeatureList>
            <Feature>Duration:</Feature>
            <Feature>6 hours</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Lots Of Photos:</Feature>
            <Feature>unlimited</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Retouching:</Feature>
            <Feature>unlimited</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Finishing:</Feature>
            <Feature>3 days</Feature>
          </FeatureList>
          <Button>Book Appointment</Button>
        </Card>
      </Container>
    </div>
  );
};

export default Pricelist;
