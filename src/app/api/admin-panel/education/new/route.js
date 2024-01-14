import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../db/connectMongoDB";
import Education from "../../../../../models/education.model";

connectMongoDB();
export async function POST(req) {
  try {
    const data = await req.json();
    const res = await Education.create(data);
    return NextResponse.json({
      message: "Education added successfully.",
      status: 200,
      skillCreated: res,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Couldn't add new education",
      status: 500,
    });
  }
}
