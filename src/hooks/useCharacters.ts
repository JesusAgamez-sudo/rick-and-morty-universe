import { useState, useEffect } from 'react';
import { Character } from '@/types';

interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export const useCharacters = (page: number = 1) => {
  const [data, setData] = useState<CharactersResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch characters from the multiverse');
        }
        
        const characterData = await response.json();
        setData(characterData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  return {
    data,
    isLoading,
    error,
    isFetching: isLoading
  };
};