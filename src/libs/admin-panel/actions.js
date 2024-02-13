"use server";

import connectMongoDB from "@/db/connectMongoDB";
import Colors from "@/models/colors.model";
import Images from "@/models/images.model";
import Text from "@/models/text.model";
import Links from "@/models/links.model";
import Skills from "@/models/skills.model";
import Projects from "@/models/project.model";
import { redirect } from "next/navigation";
import { saveImg } from "../saveImg.js";
import Education from "@/models/education.model";
import Experience from "@/models/experience.model";
import Animation from "@/models/animation.model";
import { deleteImg, uploadOnCloudinaryServerSide } from "../cloudinaryActions";
import { revalidatePath } from "next/cache";
// import Images from "../../models/images.model";

connectMongoDB();

// COLORS ACTIONS
// UPDATE COLORS
export async function updateColors(formData) {
  try {
    const _id = "658939fb5faa11030a8ea0d0";
    await Colors.updateMany({ _id }, formData);
    return true;
  } catch (error) {
    console.error("Error updating colors:", error);
    throw error;
  }
}

// IMAGES ACTIONS
// UPDATE IMAGES
export async function updateImages(formData) {
  const logo = formData.get("logo");
  const hero = formData.get("hero");
  const about = formData.get("about");
  const cv = formData.get("cv");
  const _id = "65c714f3607b959f9c23c026";
  try {
    const dbImages = await Images.findById({ _id });
    const logoPublic_id = dbImages.logo.public_id;
    const heroPublic_id = dbImages.hero.public_id;
    const aboutPublic_id = dbImages.about.public_id;
    // DELETION PHASE
    const [deletedLogoImg, deletedHeroImg, deletedAboutImg] = await Promise.all(
      [
        deleteImg(logoPublic_id),
        deleteImg(heroPublic_id),
        deleteImg(aboutPublic_id),
      ]
    );

    const [cloudLogo, cloudHero, cloudAbout] = await Promise.all([
      uploadOnCloudinaryServerSide(logo, "portfolio"),
      uploadOnCloudinaryServerSide(hero, "portfolio"),
      uploadOnCloudinaryServerSide(about, "portfolio"),
    ]);

    const localPathCV = await saveImg(cv);

    const imgObj = {};
    if (cloudLogo) {
      imgObj.logo = {
        previewUrl: cloudLogo.secure_url,
        public_id: cloudLogo.public_id,
      };
    }
    if (cloudHero) {
      imgObj.hero = {
        previewUrl: cloudHero.secure_url,
        public_id: cloudHero.public_id,
      };
    }
    if (cloudAbout) {
      imgObj.about = {
        previewUrl: cloudAbout.secure_url,
        public_id: cloudAbout.public_id,
      };
    }
    if (localPathCV) {
      imgObj.cv = {
        previewUrl: localPathCV,
        public_id: "",
      };
    }
    if (Object.keys(imgObj).length > 0) {
      const dbData = await Images.findByIdAndUpdate({ _id }, imgObj);
      // const dbData = await Images.create(imgObj);
      // console.log(dbData);
      revalidatePath("/admin-panel/images");
      return dbData;
    } else {
      return;
    }
  } catch (error) {
    console.error("Error updating images:", error);
    throw error;
  }
}

// TEXT ACTIONS
// UPDATE TEXT
export async function updateText(formData) {
  try {
    const _id = "658be804a96e8027cc059dd6";

    await Text.findByIdAndUpdate({ _id }, formData);

    return true;
  } catch (error) {
    console.error("Error updating text:", error);
    throw error;
  }
}

// ANIMATION ACTIONS
// UPDATE ANIMATION
export async function updateAnimation(formData) {
  try {
    const _id = "6590f72f3f3f7ba62897c4f7";
    await Animation.findByIdAndUpdate({ _id }, formData);
    return true;
  } catch (error) {
    console.error("Error updating text:", error);
    throw error;
  }
}

// LINKS ACTIONS
// UPDATE LINKS
export async function updateLinks(formData) {
  try {
    const _id = "658d06db722be4506beafac0";

    await Links.findByIdAndUpdate({ _id }, formData);

    return true;
  } catch (error) {
    console.error("Error updating links:", error);
    throw error;
  }
}

// PROJECTS ACTIONS
// CREATE PROJECT
export async function createProject(formData) {
  const image = formData.get("image");
  const title = formData.get("title");
  const description = formData.get("description");
  const githubUrl = formData.get("githubUrl");
  const previewUrl = formData.get("previewUrl");
  const tags = formData.get("tags");
  const tagsArray = tags.split(",");
  try {
    // const imagePath = await saveImage(image);
    const imagePath = await uploadOnCloudinaryServerSide(image, "portfolio");

    const projedtObject = {
      image: imagePath.secure_url,
      title: title,
      description: description,
      githubUrl: githubUrl,
      previewUrl: previewUrl,
      tags: tagsArray,
    };
    await Projects.create(projedtObject);
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
  redirect("/admin-panel/projects");
}
// UPDATE PROJECT
export async function updateProject(formData) {
  const image = formData.get("image");
  const title = formData.get("title");
  const description = formData.get("description");
  const githubUrl = formData.get("githubUrl");
  const previewUrl = formData.get("previewUrl");
  const _id = formData.get("_id");
  const tags = formData.get("tags");
  const tagsArray = tags.split(",");
  try {
    const imagePath = await uploadOnCloudinaryServerSide(image, "portfolio");

    const projectObject = {
      image: imagePath.secure_url,
      title: title,
      description: description,
      githubUrl: githubUrl,
      previewUrl: previewUrl,
      tags: tagsArray,
    };
    await Projects.findByIdAndUpdate({ _id }, projectObject);
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
  redirect("/admin-panel/projects");
}
// DELETE PROJECT
export async function deleteProject(_id) {
  try {
    await Projects.findByIdAndDelete({ _id });
    return true;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}

// SKILLS ACTIONS
// CREATE SKILL
export async function createSkill(skill) {
  try {
    await Skills.create({ skill });
  } catch (error) {
    console.error("Error creating skill:", error);
    throw error;
  }
  redirect("/admin-panel/skills");
}
// UPDATE SKILL
export async function updateSkill(_id, skill) {
  try {
    await Skills.findByIdAndUpdate(_id, { skill });
  } catch (error) {
    console.error("Error updating skill:", error);
    throw error;
  }
  redirect("/admin-panel/skills");
}
// DELETE SKILL
export async function deleteSkill(_id) {
  try {
    await Skills.findByIdAndDelete({ _id });
    return true;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}

// EDUCATION ACTIONS
// CREATE EDUCATION
export async function createEducation(education) {
  try {
    await Education.create({ education });
  } catch (error) {
    console.error("Error creating skill:", error);
    throw error;
  }
  redirect("/admin-panel/education");
}
// UPDATE EDUCATION
export async function updateEducation(_id, education) {
  try {
    await Education.findByIdAndUpdate(_id, { education });
  } catch (error) {
    console.error("Error updating education:", error);
    throw error;
  }
  redirect("/admin-panel/education");
}
// DELETE EDUCATION
export async function deleteEducation(_id) {
  try {
    await Education.findByIdAndDelete({ _id });
    return true;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}

// EXPERIENCE ACTIONS
// CREATE EXPERIENCE
export async function createExperience(experience) {
  try {
    await Experience.create({ experience });
  } catch (error) {
    console.error("Error creating experience:", error);
    throw error;
  }
  redirect("/admin-panel/experience");
}
// UPDATE EXPERIENCE
export async function updateExperience(_id, experience) {
  try {
    await Experience.findByIdAndUpdate(_id, { experience });
  } catch (error) {
    console.error("Error updating experience:", error);
    throw error;
  }
  redirect("/admin-panel/experience");
}
// DELETE EXPERIENCE
export async function deleteExperience(_id) {
  try {
    await Experience.findByIdAndDelete({ _id });
    return true;
  } catch (error) {
    console.error("Error deleting experience:", error);
    throw error;
  }
}
