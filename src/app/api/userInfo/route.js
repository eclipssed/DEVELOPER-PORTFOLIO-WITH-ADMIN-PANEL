import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../db/connectMongoDB";
import { getDataFromToken } from "../../../libs/getDataFromToken";
import User from "../../../models/user.model";

export async function GET(request) {
  connectMongoDB();
  try {
    const userInfo = await getDataFromToken(request);
    const userId = userInfo.id;
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      status: 200,
      user,
    });
  } catch (error) {
    throw error;
  }
}
