import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../db/connectMongoDB";
import Experience from "../../../../../models/experience.model";

connectMongoDB();
export async function POST(req) {
  try {
    const data = await req.json();
    const res = await Experience.create(data);
    return NextResponse.json({
      message: "experience added successfully.",
      status: 200,
      skillCreated: res,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Couldn't add new experience",
      status: 500,
    });
  }
}
