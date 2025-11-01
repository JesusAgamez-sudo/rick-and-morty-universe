import { useState, useEffect } from 'react'
import { Character } from '@/types'

interface CharactersResponse {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Character[]
}

export const useCharacters = (page: number = 1) => {
  const [data, setData] = useState<CharactersResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        
        if (!response.ok) {
          throw new Error('Error fetching characters')
        }
        
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCharacters()
  }, [page])

  return {
    data,
    isLoading,
    error,
    isFetching: isLoading
  }
}