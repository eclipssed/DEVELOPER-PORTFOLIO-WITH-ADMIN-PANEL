

import { writeFile } from "fs/promises";
import { join } from "path";

export const saveImage = async (image) => {
  if (image instanceof File) {
    const imageByteData = await image.arrayBuffer();
    const imageBuffer = Buffer.from(imageByteData);
    const publicDirectoryPath = join("public", "images");
    const imageName = Date.now() + "-" + image.name;
    const imagePath = join(publicDirectoryPath, imageName);

    await writeFile(imagePath, imageBuffer);
    const newPath = "/images/" + imageName;
    return newPath;
  } else {
    return image;
  }
};
