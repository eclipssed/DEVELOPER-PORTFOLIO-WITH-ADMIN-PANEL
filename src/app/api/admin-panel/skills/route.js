import connectMongoDB from "@/db/connectMongoDB";
import Skills from "@/models/skills.model";
import { NextResponse } from "next/server";

connectMongoDB();

export async function GET(req) {
  try {
    const skills = await Skills.find().select(
      "-__v -createdAt -updatedAt"
    );
    return NextResponse.json({
      status: 200,
      skills,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Couldn't get skill",
    });
  }
}

export async function PATCH(req) {
  try {
    const { _id } = await req.json();
    // console.log(_id);
    const skill = await Skills.findByIdAndDelete({ _id });
    return NextResponse.json({
      status: 200,
      message: "Successfully deleted the skill",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Couldn't delete the skill.",
    });
  }
}

export async function PUT(req) {
  try {
    const { _id } = await req.json();
    const skill = await Skills.findOne({ _id }).select(
      " -__v -createdAt -updatedAt"
    );
    return NextResponse.json({
      status: 200,
      skill: skill,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Couldn't fetch the skill",
    });
  }
}
