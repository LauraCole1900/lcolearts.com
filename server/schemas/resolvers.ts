const { Entry } = require("../models");

const resolvers = {
  Query: {
    GetAllEntries: async () => {
      return await Entry.find({})
    },
    GetOneEntry: async (_, id) => {
      return await Entry.findOne(id)
    },
  },

  Mutation: {
    createEntry: async (_, { title, content, tags }) => {
      return await Entry.create({ title, content, tags })
    },
    deleteEntry: async (_, _id) => {
      return await Entry.findOneAndDelete(_id)
    },
    editEntry: async (_, { _id, title, content, tags }) => {
      return await Entry.findOneAndUpdate({ _id, title, content, tags })
    },
  }
}

export default resolvers;