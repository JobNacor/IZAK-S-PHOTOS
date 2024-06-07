// App.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
  animation: ${fadeInUp} 1s ease-out;
`;

const neonAnimation = keyframes`
  from {
    text-shadow: 0 0 1px #fff, 0 0 5px #fff, 0 0 0px #ff4d00, 0 0 0px #ff4d00, 0 0 0px #ff4d00, 0 0 6px #ff4d00, 0 0 1px #ff4d00;
  }
  to {
    text-shadow: 0 0 1px #fff, 0 0 5px #ff4d00, 0 0 5px #ff4d00, 0 0 1px #ff4d00, 0 0 0px #ff4d00, 0 0 1px #ff4d00, 0 0 1px #ff4d00;
  }
`;

const goldText = keyframes`
  0% { color: #ffd700; }
  50% { color: #ffec80; }
  100% { color: #ffd700; }
`;

const Title = styled.h1`
  color: #ffd700; /* Color dorado */
  font-size: 7rem;
  margin-bottom: 40px;
  text-align: center;
  margin-top: 3%;
  animation: ${fadeInUp} 1.5s ease-out, ${goldText} 2s infinite alternate, ${neonAnimation} 2s infinite alternate;
`;
const Card = styled.div`
  background: #111;
  color: #fff;
  border: 2px solid gold;
  border-radius: 15px;
  margin: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(255, 215, 0, 0.2);
  width: 100%;
  max-width: 400px;
  height: auto;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(255, 215, 0, 0.5);
  }

  @media(min-width: 768px) {
    width: 400px;
  }
`;

const CardTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 3rem;
  color: gold;
`;

const Price = styled.p`
  font-size: 3rem;
  margin: 20px 0 40px;
  color: gold;
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: 10px 0;
  font-size: 1.6rem;
`;

const Feature = styled.div`
  max-width: 100%;
flex: 1;
  color: #fff;
  &:first-child {
    text-align: left;
  }
  &:last-child {
    text-align: right;
  }
`;

const Button = styled.button`
  background-color: gold;
  color: #000;
  border: none;
  padding: 15px 30px;
  margin-top: 30px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  font-size: 1.5rem;

  &:hover {
    background-color: #ffd700;
    transform: scale(1.05);
    box-shadow: 5 10 50px rgba(255, 215, 0, 0.7);
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
            <Feature>Duration</Feature>
            <Feature>3 hours</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Photos</Feature>
            <Feature>60 - 80</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Retouching</Feature>
            <Feature>25 items</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Finishing</Feature>
            <Feature>10 days</Feature>
          </FeatureList>
          <Button>Book Appointment</Button>
        </Card>
        <Card>
          <CardTitle>PREMIUM</CardTitle>
          <Price>550$</Price>
          <FeatureList>
            <Feature>Duration</Feature>
            <Feature>4 hours</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Photos</Feature>
            <Feature>85 - 90</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Retouching</Feature>
            <Feature>40 items</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Finishing</Feature>
            <Feature>7 days</Feature>
          </FeatureList>
          <Button>Book Appointment</Button>
        </Card>
        <Card>
          <CardTitle>PRO</CardTitle>
          <Price>600$</Price>
          <FeatureList>
            <Feature>Duration</Feature>
            <Feature>6 hours</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Photos</Feature>
            <Feature>unlimited</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Retouching</Feature>
            <Feature>unlimited</Feature>
          </FeatureList>
          <FeatureList>
            <Feature>Finishing</Feature>
            <Feature>3 days</Feature>
          </FeatureList>
          <Button>Book Appointment</Button>
        </Card>
      </Container>
    </div>
  );
};

export default Pricelist;
