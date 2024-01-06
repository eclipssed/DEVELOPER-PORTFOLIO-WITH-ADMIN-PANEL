import { NextResponse } from "next/server";
import connectMongoDB from "@/db/connectMongoDB";
import Images from "@/models/images.model";
import { saveImage } from "@/utils/SaveImage";

connectMongoDB();
export async function PUT(req) {
  const data = await req.formData();
  const logo = data.get("logo");
  const hero = data.get("hero");
  const about = data.get("about");
  const cv = data.get("cv");

 

  const logoPath = await saveImage(logo);
  const heroPath = await saveImage(hero);
  const aboutPath = await saveImage(about);
  const cvPath = await saveImage(cv);

  const imagesObject = {
    logo: logoPath,
    hero: heroPath,
    about: aboutPath,
    cv: cvPath,
  };
  const _id = "658bf1be47935a284ed3588a";
  const res = await Images.findByIdAndUpdate({ _id }, imagesObject);
  return NextResponse.json({
    message: "file uploaded successfully",
    success: true,
    imagesPaths: imagesObject,
  });
}

export async function GET(req) {
  try {
    const images = await Images.find().select(
      "-_id -__v -createdAt -updatedAt"
    );
    return Response.json(images);
  } catch (error) {
    throw error;
  }
}
