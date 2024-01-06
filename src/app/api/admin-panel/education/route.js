import connectMongoDB from "../../../../db/connectMongoDB";
import { NextResponse } from "next/server";
import Education from "../../../../models/education.model";

connectMongoDB();

export async function GET(req) {
  try {
    const education = await Education.find().select(
      " -__v -createdAt -updatedAt"
    );
    return NextResponse.json({
      status: 200,
      education,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Couldn't get education",
    });
  }
}

export async function PATCH(req) {
  try {
    const { _id } = await req.json();
    console.log(_id);
    const education = await Education.findByIdAndDelete({ _id });
    return NextResponse.json({
      status: 200,
      message: "Successfully deleted the education",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Couldn't delete the education.",
    });
  }
}

export async function PUT(req) {
  try {
    const { _id } = await req.json();
    const education = await Education.findOne({ _id }).select(
      " -__v -createdAt -updatedAt"
    );
    return NextResponse.json({
      status: 200,
      education: education,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Couldn't fetch the education",
    });
  }
}
