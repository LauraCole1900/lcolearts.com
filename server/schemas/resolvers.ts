const { Entry } = require("../models");

const resolvers = {
  Query: {
    getAllEntries: async () => {
      return await Entry.find({})
    },
    getMe: async () => {
      return await Entry.find({})
    },
    getOneEntry: async (_: any, _id: string) => {
      return await Entry.findOne(_id)
    },
  },

  Mutation: {
    createEntry: async (_: any, args: { title: string, content: string, tags: Array<string> }) => {
      return await Entry.create(args)
    },
    deleteEntry: async (_: any, _id: string) => {
      return await Entry.findOneAndDelete(_id)
    },
    editEntry: async (_: any, args: { _id: string, title: string, content: string, tags: Array<string> }) => {
      return await Entry.findOneAndUpdate(args)
    },
  }
}

export default resolvers;