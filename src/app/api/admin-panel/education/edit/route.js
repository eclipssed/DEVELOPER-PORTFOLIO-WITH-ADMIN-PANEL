import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../db/connectMongoDB";
import Education from "../../../../../models/education.model";

connectMongoDB();
export async function PUT(req) {
  try {
    const { edit_id, editEducation } = await req.json();
    const { _id } = edit_id;
    const res = await Education.findByIdAndUpdate(
      { _id },
      { education: editEducation }
    );
    return NextResponse.json({
      status: 200,
      message: "Education updated successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Couldn't update education",
    });
  }
}
