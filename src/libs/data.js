"use server";

import connectMongoDB from "@/db/connectMongoDB.js";
import Animation from "../models/animation.model";
import Colors from "../models/colors.model";
import Education from "../models/education.model";
import Experience from "../models/experience.model";
import Images from "../models/images.model";
import Links from "../models/links.model";
import Projects from "../models/project.model";
import Skills from "../models/skills.model";
import Text from "@/models/text.model";
import { unstable_noStore as noStore } from "next/cache";

connectMongoDB();

export const getAnimation = async () => {
  // noStore();
  try {
    const data = await Animation.find().select("-_id");
    const animation = data[0];
    const jsonObject = JSON.stringify(animation);

    // console.log(animation);
    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching animation: ", error);
    throw error;
  }
};
export const getColors = async () => {
  // noStore();
  try {
    const data = await Colors.find().select("-_id");
    const colors = data[0];
    // console.log(colors);
    const jsonObject = JSON.stringify(colors);

    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching colors: ", error);
    throw error;
  }
};
export const getEducation = async () => {
  // noStore();
  try {
    const education = await Education.find();
    // console.log(education);
    const jsonObject = JSON.stringify(education);

    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching education: ", error);
    throw error;
  }
};
export const getSingleEducation = async (_id) => {
  // noStore();
  try {
    const education = await Education.findOne(_id);
    // console.log(education);
    const jsonObject = JSON.stringify(education);

    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching education: ", error);
    throw error;
  }
};
export const getExperience = async () => {
  // noStore();
  try {
    const experience = await Experience.find();
    // console.log(experience);
    const jsonObject = JSON.stringify(experience);

    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching experience: ", error);
    throw error;
  }
};
export const getSingleExperience = async (_id) => {
  // noStore();
  try {
    const experience = await Experience.findOne(_id);
    // console.log(experience);
    const jsonObject = JSON.stringify(experience);

    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching single experience: ", error);
    throw error;
  }
};
export const getImages = async () => {
  // noStore();
  try {
    const data = await Images.find();
    const images = data[0];
    // console.log(images);
    const jsonObject = JSON.stringify(images);

    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching images: ", error);
    throw error;
  }
};
export const getLinks = async () => {
  // noStore();
  try {
    const data = await Links.find();
    const links = data[0];
    // console.log(links);
    const jsonObject = JSON.stringify(links);

    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching links: ", error);
    throw error;
  }
};
export const getSingleProject = async (_id) => {
  try {
    const project = await Projects.findOne({ _id });
    // console.log(project)
    const jsonObject = JSON.stringify(project);

    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching projects: ", error);
    throw error;
  }
};
export const getProjects = async () => {
  noStore();
  try {
    const projects = await Projects.find();
    // console.log(projects)
    const jsonObject = JSON.stringify(projects);

    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching projects: ", error);
    throw error;
  }
};
export const getSkills = async () => {
  // noStore();
  try {
    const skills = await Skills.find();
    // console.log(skills);
    const jsonObject = JSON.stringify(skills);

    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching skills: ", error);
    throw error;
  }
};
export const getSingleSkill = async (_id) => {
  // noStore();
  try {
    const skill = await Skills.findOne(_id);
    const jsonObject = JSON.stringify(skill);

    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching skill: ", error);
    throw error;
  }
};
export const getText = async () => {
  // noStore();
  try {
    const data = await Text.find();
    const textData = data[0];
    // console.log(textData);
    const jsonObject = JSON.stringify(textData);

    return jsonObject;
  } catch (error) {
    console.log("An error occured while fetching text: ", error);
    throw error;
  }
};
