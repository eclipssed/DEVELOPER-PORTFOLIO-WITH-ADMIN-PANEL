export const fetchText = async () => {
  try {
    const res = await fetch(process.env.ROOT_URL + "/api/admin-panel/text", {
      cache: "no-store",
    });
    const data = await res.json();
    // console.log(res);
    return data[0];
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

export const fetchImages = async () => {
  try {
    const res = await fetch(process.env.ROOT_URL + "/api/admin-panel/images", {
      cache: "no-store",
    });
    const data = await res.json();
    // console.log(res)
    return data[0];
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

export const fetchSkills = async () => {
  try {
    const res = await fetch(process.env.ROOT_URL + "/api/admin-panel/skills", {
      cache: "no-store",
    });
    const data = await res.json();
    // console.log(data);
    return data.skills;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

export const fetchEducation = async () => {
  try {
    const res = await fetch(
      process.env.ROOT_URL + "/api/admin-panel/education",
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    // console.log(data);
    return data.education;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};
export const fetchExperience = async () => {
  try {
    const res = await fetch(
      process.env.ROOT_URL + "/api/admin-panel/experience",
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    // console.log(data);
    return data.experience;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};
export const fetchProjects = async () => {
  try {
    const res = await fetch(process.env.ROOT_URL + "/api/admin-panel/project", {
      cache: "no-store",
    });
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

export const fetchSocialLinks = async () => {
  try {
    const res = await fetch(process.env.ROOT_URL + "/api/admin-panel/links", {
      cache: "no-store",
    });
    const data = await res.json();
    // console.log(data);
    return data[0];
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};
