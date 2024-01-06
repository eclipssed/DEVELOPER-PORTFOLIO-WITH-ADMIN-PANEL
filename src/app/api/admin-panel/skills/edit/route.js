import { NextResponse } from "next/server";
import connectMongoDB from "@/db/connectMongoDB";
import Skills from "@/models/skills.model";

connectMongoDB();
export async function PUT(req) {
  try {
    const { edit_id, editSkill } = await req.json();
    const { _id } = edit_id;
    const res = await Skills.findByIdAndUpdate({ _id }, { skill: editSkill });
    return NextResponse.json({
      status: 200,
      message: "skill updated successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Couldn't update skill",
    });
  }
}
