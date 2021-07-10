"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Entry } = require("../models");
const resolvers = {
    Query: {
        GetAllEntries: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield Entry.find({});
        }),
        GetOneEntry: (_, id) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Entry.findOne(id);
        }),
    },
    Mutation: {
        createEntry: (_, { title, content, tags }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Entry.create({ title, content, tags });
        }),
        deleteEntry: (_, _id) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Entry.findOneAndDelete(_id);
        }),
        editEntry: (_, { _id, title, content, tags }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Entry.findOneAndUpdate({ _id, title, content, tags });
        }),
    }
};
exports.default = resolvers;
