// Import the cloudinary library
import { v2 as cloudinaryV2 } from "cloudinary";

// Configuration object with your Cloudinary credentials
const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};

// Configure the Cloudinary library with your credentials
cloudinaryV2.config(cloudinaryConfig);

// Export the configured Cloudinary library
export { cloudinaryV2 as cloudinaryConfig };
