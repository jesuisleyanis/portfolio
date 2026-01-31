import "../App.css";
import Code from "./Code";
import { GraduationCap } from "lucide-react";
import { ReactIcon } from "./icons/React";
import { SymfonyIcon } from "./icons/Symfony";
import { TailwindIcon } from "./icons/Tailwind";

const Skill = ({
  icon,
  title,
  subtitle,
}: {
  icon: any;
  title: string;
  subtitle: any;
}) => {
  return (
    <div className="flex flex-col lg:size-1/3 space-y-3 mt-4 p-2">
      {icon}
      <p className="text-3xl font-semibold text-grisjoli">{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <div>
      <Code>
        <GraduationCap size={17} className="mr-1" />
        Skills
      </Code>
      <h2 className="font-bold text-3xl text-grisjoli">
        My technology stack...
      </h2>
      <div className="flex flex-col lg:flex-row">
        <Skill
          icon={<ReactIcon size={60} class="spin-animation" />}
          title={"React"}
          subtitle={
            <p className="text-sm text-grisjoli">
              I love build dynamic user interfaces with the js framework{" "}
              <Code>
                <ReactIcon size={13} class="mr-1" />
                React
              </Code>
              , creating engaging and responsive web experiences.
            </p>
          }
        />

        <Skill
          icon={<SymfonyIcon size={60} />}
          title={"Symfony"}
          subtitle={
            <p className="text-sm text-grisjoli">
              I develop robust backend systems using my favorite framework,{" "}
              <Code>
                <SymfonyIcon size={13} class="mr-1" />
                Symfony
              </Code>
              , ensuring efficient and secure PHP applications.
            </p>
          }
        />

        <Skill
          icon={<TailwindIcon size={60} />}
          title={"Tailwind"}
          subtitle={
            <p className="text-sm text-grisjoli">
              I design modern, responsive and beautifull layouts with{" "}
              <Code>
                <TailwindIcon size={13} class="mr-1" />
                Tailwind
              </Code>
              , utilizing utility-first styles for flexible design.
            </p>
          }
        />
      </div>
    </div>
  );
}
