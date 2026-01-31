import { Instagram, Mail, Linkedin } from "lucide-react";
import "./Header.css";
import { ReactIcon } from "./icons/React";
import { SymfonyIcon } from "./icons/Symfony";
import Code from "./Code";
import Moi from "../assets/moi.jpg";

const IconButton = ({
  icon: Icon,
  target,
  size,
}: {
  icon: any;
  target: string;
  size?: number;
}) => {
  return (
    <a href={target} className="btn btn-sm btn-circle btn-outline">
      <Icon size={size} />
    </a>
  );
};

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8">
      <div className="flex flex-col items-start place-content-center gap-2 mt-12 lg:w-2/3">
        <p className="mb-5">Welcome on my personal website</p>
        <div className="inline-flex overflow-visible">
          <p className="text-5xl font-bold bg-gradient-to-r mr-3 pb-3">Yanis</p>
          <p className="text-5xl font-bold gradient-text">Capelle</p>
        </div>
        <p className="text-xl font-semibold">Fullstack developer</p>
        <p className="text-l text-zinc-500 break-words">
          I love creating modern and design websites using{" "}
          <Code>
            <ReactIcon size={13} class={"mr-0.5"} />
            React
          </Code>{" "}
          and
          <Code>
            <SymfonyIcon size={13} class={"mr-0.5"} />
            Symfony
          </Code>
        </p>
        <div className="flex space-x-2">
          <IconButton
            icon={Mail}
            target={"mailto:yanis.capelle@ecoles-epsi.net"}
            size={18}
          />
          <IconButton
            icon={Instagram}
            target={"https://www.instagram.com/yanis_cpl_/"}
            size={18}
          />
          <IconButton
            icon={Linkedin}
            target={"https://www.linkedin.com/in/yanis-capelle-3b1077231/"}
            size={18}
          />
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-end">
        <img src={Moi} alt="photo de yanis" className="rounded-full h-56" />
      </div>
    </div>
  );
}
