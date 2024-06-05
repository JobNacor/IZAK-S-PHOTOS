import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #000;
  color: #fff;
  padding: 60px 40px;  // Increased padding
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 40px;
`;

const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;  // Increased gap between columns
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;  // Increased gap between FAQ items
  width: 100%;
`;

const FaqItem = styled.div`
  background-color: #111;
  border: 1px solid #333;
  padding: 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`;

const Answer = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;
  line-height: 1.5;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const Icon = styled.span`
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  transform: ${props => (props.show ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const faqs = [
  {
    question: 'What type of photography do you specialize in?',
    answer: 'I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.',
  },
  {
    question: 'How can I book a photography session with you?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
  {
    question: 'What equipment do you use for your photography?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
  {
    question: 'Can I request a specific location for a photoshoot?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
  {
    question: 'What is your editing process like?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
  {
    question: 'Are digital files included in your photography packages?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
  {
    question: 'Do you offer prints of your photographs?',
    answer: 'Yes, prints are available for purchase. Explore the \'Prints\' section for more details on sizes and pricing.',
  },
  {
    question: 'How long does it take to receive the edited photos after a session?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const leftColumnFaqs = faqs.slice(0, 4);
  const rightColumnFaqs = faqs.slice(4);

  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <FaqContainer>
        <Column>
          {leftColumnFaqs.map((faq, index) => (
            <FaqItem key={index} onClick={() => handleToggle(index)}>
              <Question>
                {faq.question}
                <Icon show={activeIndex === index}>&#9660;</Icon>
              </Question>
              <Answer show={activeIndex === index}>{faq.answer}</Answer>
            </FaqItem>
          ))}
        </Column>
        <Column>
          {rightColumnFaqs.map((faq, index) => (
            <FaqItem key={index + 4} onClick={() => handleToggle(index + 4)}>
              <Question>
                {faq.question}
                <Icon show={activeIndex === index + 4}>&#9660;</Icon>
              </Question>
              <Answer show={activeIndex === index + 4}>{faq.answer}</Answer>
            </FaqItem>
          ))}
        </Column>
      </FaqContainer>
    </Container>
  );
};

export default FAQ;
