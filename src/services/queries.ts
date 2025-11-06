import { gql } from 'graphql-request';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
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
      }
    }
  }
`;
