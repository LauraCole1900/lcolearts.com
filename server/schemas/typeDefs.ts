const { gql } = require("apollo-server-express");

const typeDefs = gql`

  input Entry {
    title: String!
    content: String!
    tags: [String]
  }

  # GET one entry
  # GET all entries
  type Query {
    GetAllEntries: [Entry]!
    GetOneEntry(id: String): Entry
  }

  type Mutation {
    createEntry(title: String!, content: String!, tags: [String]): Entry
    deleteEntry(_id: String!): Entry
    editEntry(_id: String!, title: String!, content: String!, tags: [String]): Entry
  }
  `;

  export default typeDefs;