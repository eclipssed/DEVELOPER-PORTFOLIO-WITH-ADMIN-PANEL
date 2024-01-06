import { NextResponse } from "next/server";
import connectMongoDB from "@/db/connectMongoDB";
import Projects from "@/models/project.model";
import { saveImage } from "@/utils/SaveImage";

connectMongoDB();
export async function PUT(req) {
  const data = await req.formData();
  const image = data.get("image");
  const title = data.get("title");
  const description = data.get("description");
  const githubUrl = data.get("githubUrl");
  const previewUrl = data.get("previewUrl");
  const tags = data.get("tags");
  const _id = data.get("_id");


  const imagePath = await saveImage(image);

  const projedtObject = {
    image: imagePath,
    title: title,
    description: description,
    githubUrl: githubUrl,
    previewUrl: previewUrl,
    tags: tags,
  };
  const res = await Projects.findByIdAndUpdate({ _id }, projedtObject);
  return NextResponse.json({
    status: 200,
    message: "file uploaded successfully",
    projectData: projedtObject,
  });
}
