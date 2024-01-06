import connectMongoDB from "../../../../db/connectMongoDB";
import Colors from "../../../../models/colors.model";

connectMongoDB();
export async function PUT(req) {
  try {
    const updatingColors = await req.json();
    const _id = "658939fb5faa11030a8ea0d0";
    console.log(updatingColors);

    const updatedColors = await Colors.updateMany({ _id }, updatingColors);
    console.log(updatedColors);

    return Response.json({ status: 200, updatedColors });
  } catch (error) {
    console.error("Error updating colors:", error);
    throw error;
  }
}

export async function GET(req) {
  try {
    const colors = await Colors.find().select(
      "-_id -__v -updatedAt -createdAt"
    );
    return Response.json(colors);
  } catch (error) {
    throw error;
  }
}
