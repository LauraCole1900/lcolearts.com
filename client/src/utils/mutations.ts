import { gql } from "@apollo/client";

export const CREATE_ENTRY = gql`
mutation createEntry($title: String!, $content: String!, $tags: [String]) {
  createToDo(title: $title, content: $content, tags: $tags) {
    _id
    title
    content
    tags

  }
}
`;

export const DELETE_ENTRY = gql`
  mutation deleteEntry($id: String!) {
    deleteEntry(_id: $id) {
      _id
      title
      content
      tags
    }
  }
`;

export const EDIT_ENTRY = gql`
  mutation editEntry($id: String!, $name: String!, $description: String!, $due: String, $done: Boolean!) {
    editEntry(_id: $id, name: $name, description: $description, due: $due, done: $done) {
      _id
      title
      content
      tags
    }
  }
`;