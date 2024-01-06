import connectMongoDB from "../../../../db/connectMongoDB";
import Experience from "../../../../models/experience.model";
import { NextResponse } from "next/server";

connectMongoDB();

export async function GET(req) {
  try {
    const experience = await Experience.find().select(
      " -__v -createdAt -updatedAt"
    );
    return NextResponse.json({
      status: 200,
      experience,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Couldn't get experience",
    });
  }
}

export async function PATCH(req) {
  try {
    const { _id } = await req.json();
    console.log(_id);
    const experience = await Experience.findByIdAndDelete({ _id });
    return NextResponse.json({
      status: 200,
      message: "Successfully deleted the experience",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Couldn't delete the experience.",
    });
  }
}

export async function PUT(req) {
  try {
    const { _id } = await req.json();
    const experience = await Experience.findOne({ _id }).select(
      " -__v -createdAt -updatedAt"
    );
    return NextResponse.json({
      status: 200,
      experience: experience,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Couldn't fetch the experience",
    });
  }
}
