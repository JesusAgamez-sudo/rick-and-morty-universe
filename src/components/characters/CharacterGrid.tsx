import React, { useState } from 'react';
import styled from 'styled-components';
import { useCharacters } from '@/hooks/useCharacters';
import CharacterCard from './CharacterCard';
import LoadingSpinner from '@/ui/LoadingSpinner';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 3rem auto;
  padding: 1rem 2.5rem;
  background: linear-gradient(45deg, #00ff00, #ff00ff);
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    animation: portal-glow 3s ease-in-out infinite alternate;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #ff6b6b;
  font-size: 1.2rem;
  padding: 2rem;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 10px;
  margin: 2rem auto;
  max-width: 500px;
`;

const CharacterGrid: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isFetching } = useCharacters(page);

  if (isLoading && page === 1) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage>
        ❌ Error cargando personajes: {error.message}
      </ErrorMessage>
    );
  }

  const characters = data?.results || [];

  return (
    <>
      <GridContainer>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </GridContainer>
      
      {data?.info.next && (
        <LoadMoreButton 
          onClick={() => setPage(prev => prev + 1)}
          disabled={isFetching}
        >
          {isFetching ? '🔄 Cargando...' : '🚀 Cargar Más Dimensiones'}
        </LoadMoreButton>
      )}
    </>
  );
};

export default CharacterGrid;