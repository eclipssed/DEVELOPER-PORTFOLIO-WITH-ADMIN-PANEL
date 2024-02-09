import FilterProjects from "../../../components/landing-page/FilterProjects";
import { getProjects } from "../../../libs/data";

const ProjectsPage = async () => {
  const projectsData = await getProjects().then((data) => JSON.parse(data));

  return (
    <section
      id="projects"
      className="container mx-auto px-4 lg:px-16 py-2 text-center mt-32 max-sm:mt-24 "
    >
      <h2 className="text-4xl mb-4 text-white font-bold">My Projects</h2>
      <FilterProjects projectsData={projectsData} />
    </section>
  );
};

export default ProjectsPage;
