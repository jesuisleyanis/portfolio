import Header from "./Header";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./Contact";

export default function Home() {
  return (
    <div className="w-4/5 lg:w-3/5 flex flex-col">
      <Header></Header>
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="mt-10 lg:w-2/4 flex">
          <ProjectsSection></ProjectsSection>
        </div>
        <div className="mt-10 lg:w-2/4 flex">
          <ExperienceSection></ExperienceSection>
        </div>
      </div>
      <div className="mt-24">
        <SkillsSection></SkillsSection>
      </div>
      <div className="mt-24">
        <ContactSection></ContactSection>
      </div>
      <div className="h-32"></div>
    </div>
  );
}
