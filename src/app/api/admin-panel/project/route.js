import connectMongoDB from "@/db/connectMongoDB";
import Projects from "@/models/project.model";

connectMongoDB();

export async function GET(req) {
  try {
    const projects = await Projects.find().select(
      "-__v -createdAt -updatedAt"
    );
    return Response.json(projects);
  } catch (error) {
    throw error;
  }
}

export async function PATCH(req) {
  try {
    const { _id } = await req.json();
    const projects = await Projects.findByIdAndDelete({ _id });
    return Response.json({
      status: 200,
      message: "Successfully deleted the project",
    });
  } catch (error) {
    throw error;
  }
}

export async function PUT(req) {
  try {
    const { _id } = await req.json();
    const project = await Projects.findOne({ _id }).select(
      " -__v -createdAt -updatedAt"
    );
    return Response.json(project);
  } catch (error) {
    throw error;
  }
}
