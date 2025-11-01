import { gql } from 'graphql-request'

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        origin {
          name
        }
        location {
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`

export const GET_CHARACTER_DETAILS = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        name
        type
        dimension
      }
      location {
        name
        type
        dimension
      }
      episode {
        id
        name
        episode
        air_date
      }
    }
  }
`
