import "../App.css";
import { RocketIcon } from "./icons/Rocket";
import { MoveRight } from "lucide-react";
import Pharmacy from "../assets/pharmacie.png";
import Mercure from "../assets/mercure.png";
import LearnIt from "../assets/apprendre.png";
import Snake from "../assets/serpent.png";
import Web from "../assets/site-internet.png";

const ProjectsRow = ({
  img,
  target,
  text,
  isFinnish,
}: {
  img: string;
  target: string;
  text: string;
  isFinnish: boolean;
}) => {
  return (
    <a href={target}>
      <div className="flex p-2 hover:bg-black/20 cursor-pointer rounded-lg transition-colors">
        <img className="w-9 object-contain" src={img} alt="img" />
        <div className="flex flex-col ms-4">
          <p className="text-sm font-bold flex">{text}</p>
          {isFinnish ? (
            <a href={target}>
              <p className="text-xs mt-1 text-gray-500 flex">
                Voir le projet
                <MoveRight size={18} className="ms-4" />
              </p>
            </a>
          ) : (
            <p className="text-xs mt-1 text-gray-500 flex">
              Is in development...
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

export default function ProjectsSection() {
  return (
    <div className="card card-compact border border-slate-700 shadow-xl card-color p-3 lg:mr-5">
      <div className="flex">
        <RocketIcon
          color="#f4f4f51a"
          className="fill-zinc-100/10"
          strokeWidth={1.5}
        />
        <p className="ps-2 icons-section text-sm font-bold">My projects</p>
      </div>
      <div className="mt-3">
        <ProjectsRow
          img={Mercure}
          target={"#"}
          text={"Mercure Hotel"}
          isFinnish={true}
        ></ProjectsRow>
        <ProjectsRow
          img={Snake}
          target={"#"}
          text={"Snake Game"}
          isFinnish={true}
        ></ProjectsRow>
        <ProjectsRow
          img={LearnIt}
          target={"#"}
          text={"Learn It"}
          isFinnish={true}
        ></ProjectsRow>
        <ProjectsRow
          img={Web}
          target={"#"}
          text={"My Portfolio"}
          isFinnish={true}
        ></ProjectsRow>
        <ProjectsRow
          img={Pharmacy}
          target={"#"}
          text={"Pharmacy Shedule"}
          isFinnish={false}
        ></ProjectsRow>
      </div>
    </div>
  );
}
