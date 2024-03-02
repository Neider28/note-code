import mongoose from "mongoose";

export interface NoteDocument extends mongoose.Document {
  language: string;
  code: string;
  theme: string;
}

const noteSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
});

const Note = mongoose?.models?.Note || mongoose.model<NoteDocument>("Note", noteSchema);

export default Note;
