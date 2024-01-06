import connectMongoDB from "@/db/connectMongoDB";
import Text from "@/models/text.model";

connectMongoDB();
export async function PUT(req) {
  try {
    const updatingText = await req.json();
    const _id = "658be804a96e8027cc059dd6";

    const updatedText = await Text.findByIdAndUpdate({ _id }, updatingText);
    console.log(updatedText);

    return Response.json({ status: 200, updatedText });
  } catch (error) {
    console.error("Error updating text:", error);
    throw error;
  }
}

export async function GET(req) {
  try {
    const textData = await Text.find().select(
      "-_id -__v -createdAt -updatedAt"
    );
    return Response.json(textData);
  } catch (error) {
    throw error;
  }
}
