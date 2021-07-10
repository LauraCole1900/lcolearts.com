import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query getMe($email: String!) {
  getMe(email: $email) {
    _id
    email
  }
}
`;

export const QUERY_ALL_ENTRIES = gql`
query getAllEntries {
  GetAllEntries {
    _id
    title
    content
    tags
  }
}
`;

export const QUERY_ONE_ENTRY = gql `
query GetOneEntry($id: String!) {
  GetEntry(_id: $id) {
    _id
    title
    content
    tags
  }
}
`;