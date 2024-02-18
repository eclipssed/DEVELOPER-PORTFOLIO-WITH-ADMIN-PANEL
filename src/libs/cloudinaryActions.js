import { cloudinaryConfig } from "./cloudinaryConfig";

// IMAGE DELETION FROM CLOUDINARY
export async function deleteImg(public_id) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await cloudinaryConfig.uploader.destroy(public_id);
      if (result) {
        resolve(result);
      }
      return result;
    } catch (error) {
      reject(error);
    }
  });
}

// IMAGE UPLOAD TO CLOUDINARY
export async function cloudinaryUpload(img) {
  try {
    if (img.startsWith("https://")) {
      return img;
    } else {
      const res = await cloudinaryConfig.uploader.upload(img, {
        upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
        folder: process.env.CLOUDINARY_UPLOAD_FOLDER,
      });
      return res;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
