import { ObjectId } from "mongoose";

export interface Entry {
  _id: ObjectId,
  title: string,
  content: string,
  tags: Array<string>,
  created_At: Date
}