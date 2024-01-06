import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import connectMongoDB from "@/db/connectMongoDB";
import Projects from "@/models/project.model";
import { join } from "path";
import { saveImage } from "@/utils/SaveImage";

connectMongoDB();
export async function POST(req) {
  const data = await req.formData();
  const image = data.get("image");
  const title = data.get("title");
  const description = data.get("description");
  const githubUrl = data.get("githubUrl");
  const previewUrl = data.get("previewUrl");
  const tags = data.get("tags");

  const imagePath = await saveImage(image);

  const projedtObject = {
    image: imagePath,
    title: title,
    description: description,
    githubUrl: githubUrl,
    previewUrl: previewUrl,
    tags: tags,
  };
  const res = await Projects.create(projedtObject);
  return NextResponse.json({
    message: "file uploaded successfully",
    success: true,
    projectData: projedtObject,
  });
}
