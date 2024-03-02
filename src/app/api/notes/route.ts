import Note from "@/models/Note";
import connectDB from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  await connectDB();

  try {
    const newNote = new Note(await req.json());
    await newNote.save();
    return NextResponse.json(
      {
        note: newNote, 
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: "Internal Error!",
      },
      {
        status: 500,
      }
    );
  }
}
