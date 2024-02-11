import { cloudinaryConfig } from "./cloudinaryConfig";

// CLIENT SIDE IMAGE UPLOAD TO CLOUDINARY
export async function uploadOnCloudinaryClinetSide(img) {
  try {
    const formData = new FormData();
    formData.append("file", img);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append(
      "cloud_name",
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    );
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
    formData.append(
      "api_secret",
      process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
    );
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/nextCrud/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    // console.log(data);
    return data.secure_url;
  } catch (error) {
    throw error;
  }
}

// SERVER SIDE IMAGE UPLOAD TO CLOUDINARY
export async function uploadOnCloudinaryServerSide(img, folder) {
  if (img && typeof img === "object" && (img.path || img.name || img.type)) {
    const buffer = await img.arrayBuffer();
    const bytes = Buffer.from(buffer);
    return new Promise(async (resolve, reject) => {
      cloudinaryConfig.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder: folder,
          },
          async (err, result) => {
            if (err) {
              console.log(err);
              reject(err);
            } else {
              resolve(result);
            }
          }
        )
        .end(bytes);
    });
  } else {
    return img;
  }
}

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
