import connectMongoDB from "@/db/connectMongoDB";
import Animation from "@/models/animation.model";

connectMongoDB();
// export async function POST(req) {
//   try {
//     const updatingAnimationText = await req.json();

//     const updatedAnimationText = await Animation.create(updatingAnimationText);
//     console.log(updatedAnimationText);

//     return Response.json({ status: 200, updatedAnimationText });
//   } catch (error) {
//     console.error("Error updating text:", error);
//     throw error;
//   }
// }
export async function PUT(req) {
  try {
    const updatingAnimationText = await req.json();
    const _id = "6590f72f3f3f7ba62897c4f7";

    const updatedAnimationText = await Animation.findByIdAndUpdate(
      { _id },
      updatingAnimationText
    );
    console.log(updatedAnimationText);

    return Response.json({ status: 200, updatedAnimationText });
  } catch (error) {
    console.error("Error updating text:", error);
    throw error;
  }
}

export async function GET(req) {
  try {
    const animatioinTextData = await Animation.find().select(
      "-_id -__v -createdAt -updatedAt"
    );
    return Response.json(animatioinTextData);
  } catch (error) {
    throw error;
  }
}
