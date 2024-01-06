import connectMongoDB from "@/db/connectMongoDB.js";
import Animation from "../models/animation.model";

export const getAnimation = async () => {
  try {
    connectMongoDB();
    const animation = await Animation.find();
    console.log(animation);
    return animation;
  } catch (error) {
    console.log("An error occured while fetching animation.");
    throw error;
  }
};
