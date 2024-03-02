import Note from "@/models/Note";
import connectDB from "@/utils/dbConnect";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params } : { params: Params }) => {
  await connectDB();

  try {
    const note = await Note.findById(params.id);
    
    if (!note) {
      return NextResponse.json(
        {
          data: "Note not found!",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        note: note, 
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
