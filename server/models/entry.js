"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema, model } = require('mongoose');
const entrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    created_At: {
        type: Date,
        default: Date.now,
        required: true
    }
});
const Entry = model("Entry", entrySchema);
exports.default = Entry;
