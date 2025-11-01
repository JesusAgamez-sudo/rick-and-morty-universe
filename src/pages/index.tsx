import Head from 'next/head'
import styled from 'styled-components'
import CharacterGrid from '@/components/characters/CharacterGrid'

const Container = styled.main`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(0, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`

// Usamos colores directos en lugar del tema para evitar errores
const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(
    45deg, 
    #00ff00, 
    #ff00ff,
    #00ffff
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
  animation: text-glow 2s ease-in-out infinite alternate;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #cccccc;
  margin-bottom: 3rem;
  animation: text-glow 2s ease-in-out infinite alternate;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty Multiverse</title>
        <meta name="description" content="Explore the infinite multiverse of Rick and Morty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container>
        <Title>¡Wubba Lubba Dub Dub!</Title>
        <Subtitle>Explorando el multiverso infinito...</Subtitle>
        <CharacterGrid />
      </Container>
    </>
  )
}