import { NextResponse } from "next/server";
import connectMongoDB from "@/db/connectMongoDB";
import Skills from "@/models/skills.model";

connectMongoDB();
export async function POST(req) {
  try {
    const data = await req.json();
    const res = await Skills.create(data);
    return NextResponse.json({
      message: "skill added successfully.",
      status: 200,
      skillCreated: res,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Couldn't add new skill",
      status: 500,
    });
  }
}
