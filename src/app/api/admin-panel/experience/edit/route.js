import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../db/connectMongoDB";
import Experience from "../../../../../models/experience.model";

connectMongoDB();
export async function PUT(req) {
  try {
    const { edit_id, editExperience } = await req.json();
    const { _id } = edit_id;
    const res = await Experience.findByIdAndUpdate(
      { _id },
      { experience: editExperience }
    );
    return NextResponse.json({
      status: 200,
      message: "experience updated successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Couldn't update experience",
    });
  }
}
