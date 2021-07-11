"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require("apollo-server-express");
const typeDefs = gql `

  input Entry {
    title: String!
    content: String!
    tags: [String]
    created_At: Date
  }

  # GET one entry
  # GET all entries
  type Query {
    getAllEntries: [Entry]!
    getMe: Entry
    getOneEntry(id: String): Entry
  }

  type Mutation {
    createEntry(title: String!, content: String!, tags: [String]): Entry
    deleteEntry(_id: String!): Entry
    editEntry(_id: String!, title: String!, content: String!, tags: [String]): Entry
  }
  `;
exports.default = typeDefs;
