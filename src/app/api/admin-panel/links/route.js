import connectMongoDB from "@/db/connectMongoDB";
import Links from "@/models/links.model";

connectMongoDB();
export async function POST(req) {
  try {
    const updatingLinks = await req.json();
    const _id = "658d06db722be4506beafac0";

    const updatedLink = await Links.findByIdAndUpdate({_id},updatingLinks);
    // console.log(updatedLink);

    return Response.json({ status: 200, updatedLink });
  } catch (error) {
    console.error("Error updating text:", error);
    throw error;
  }
}

export async function GET(req) {
  try {
    const linksData = await Links.find().select(
      "-_id -__v -createdAt -updatedAt"
    );
    return Response.json(linksData);
  } catch (error) {
    throw error;
  }
}
