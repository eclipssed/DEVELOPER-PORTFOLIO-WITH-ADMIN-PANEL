import { writeFile } from "fs/promises";
import { join } from "path";

export async function saveImg(image) {
  if (
    image &&
    typeof image === "object" &&
    (image.path || image.name || image.type)
  ) {
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
}
