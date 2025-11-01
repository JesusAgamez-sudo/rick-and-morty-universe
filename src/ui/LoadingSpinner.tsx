import React from 'react';
import styled, { keyframes } from 'styled-components';

const portalSpin = keyframes`
  0% {
    transform: rotate(0deg);
    box-shadow: 
      0 0 20px #00ff00,
      0 0 40px #ff00ff;
  }
  50% {
    box-shadow: 
      0 0 40px #ff00ff,
      0 0 80px #00ff00;
  }
  100% {
    transform: rotate(360deg);
    box-shadow: 
      0 0 20px #00ff00,
      0 0 40px #ff00ff;
  }
`;

const textGlow = keyframes`
  0%, 100% { 
    text-shadow: 
      0 0 10px #00ff00,
      0 0 20px #ff00ff;
  }
  50% { 
    text-shadow: 
      0 0 15px #ff00ff,
      0 0 30px #00ff00;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  flex-direction: column;
`;

const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 4px solid transparent;
  border-top: 4px solid #00ff00;
  border-right: 4px solid #ff00ff;
  border-bottom: 4px solid #8b00ff;
  border-left: 4px solid #00ffff;
  border-radius: 50%;
  animation: ${portalSpin} 1.5s linear infinite;
  margin-bottom: 1rem;
`;

const LoadingText = styled.p`
  color: #cccccc;
  font-size: 1.2rem;
  text-align: center;
  animation: ${textGlow} 2s ease-in-out infinite alternate;
`;

const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <Spinner />
      <LoadingText>Escaneando multiverso...</LoadingText>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;