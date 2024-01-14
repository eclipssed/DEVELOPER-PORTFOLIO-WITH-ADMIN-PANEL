import FilterProjects from "../../../components/landing-page/FilterProjects";

const fetchProjects = async () => {
  try {
    const res = await fetch(process.env.ROOT_URL + "/api/admin-panel/project", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

const ProjectsSection = async () => {
  const projectsData = await fetchProjects();
  // console.log(projectsData);

  return (
    <section
      id="projects"
      className="container mx-auto px-4 lg:px-16 py-2 text-center "
    >
      <h2 className="text-4xl mb-4 text-white font-bold">My Projects</h2>
      <FilterProjects projectsData={projectsData} />
    </section>
  );
};

export default ProjectsSection;
