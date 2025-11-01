import React from 'react';
import styled from 'styled-components';
import { Character } from '@/types';

interface CharacterCardProps {
  character: Character;
}

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 15px;
  padding: 1.5rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #00ff00;
    transform: translateY(-5px);
    animation: portal-glow 3s ease-in-out infinite alternate;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 0, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  border: 2px solid #ff00ff;
`;

const CharacterName = styled.h3`
  color: #ffffff;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  text-align: center;
  animation: text-glow 2s ease-in-out infinite alternate;
`;

const StatusIndicator = styled.div<{ status: string }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${props => 
    props.status === 'Alive' ? '#00ff00' : 
    props.status === 'Dead' ? '#ff0000' : '#666666'};
`;

const CharacterInfo = styled.div`
  color: #cccccc;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
`;

const SpeciesBadge = styled.span`
  background: linear-gradient(45deg, #ff00ff, #8b00ff);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 0.5rem;
  display: inline-block;
`;

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card>
      <CharacterImage 
        src={character.image} 
        alt={character.name}
        loading="lazy"
      />
      <CharacterName>{character.name}</CharacterName>
      
      <CharacterInfo>
        <StatusIndicator status={character.status} />
        {character.status} - {character.gender}
      </CharacterInfo>
      
      <CharacterInfo>
        📍 {character.species}
      </CharacterInfo>
      
      <CharacterInfo>
        🏠 {character.origin.name}
      </CharacterInfo>
      
      <SpeciesBadge>
        {character.type || character.species}
      </SpeciesBadge>
    </Card>
  );
};

export default CharacterCard;