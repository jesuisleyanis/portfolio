import { useState } from "react";
import "../App.css";
import { RocketIcon } from "./icons/Rocket";
import { MoveRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Planexo from "../assets/planexo.png";
import LockedIn from "../assets/lockedin.png";
import Shadcn from "../assets/shadcn.png";

import Screen1 from "../assets/screen/1.png";
import Screen2 from "../assets/screen/2.png";
import Screen3 from "../assets/screen/3.png";
import Screen4 from "../assets/screen/4.png";
import Screen5 from "../assets/screen/5.png";
import Screen6 from "../assets/screen/6.png";
import Screen7 from "../assets/screen/7.png";
import Screen8 from "../assets/screen/8.png";
import Screen9 from "../assets/screen/9.png";
import Screen10 from "../assets/screen/10.png";
import Screen11 from "../assets/screen/11.png";
import Screen12 from "../assets/screen/12.png";
import Screen13 from "../assets/screen/13.png";

const screens = [Screen1, Screen2, Screen3, Screen4, Screen5, Screen6, Screen7, Screen8, Screen9, Screen10, Screen11, Screen12, Screen13];

const Badge = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-green-500/10 px-1.5 py-0.5 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
      {text}
    </span>
  );
};

const ProjectsRow = ({
  img,
  target,
  text,
  badges,
  onClick,
}: {
  img: string;
  target?: string;
  text: string;
  badges: string[];
  onClick?: () => void;
}) => {
  const content = (
    <div className="flex p-2 hover:bg-black/20 cursor-pointer rounded-lg transition-colors">
      <img className="w-9 h-9 object-contain rounded-xl" src={img} alt={`${text} project icon`} />
      <div className="flex flex-col ms-4">
        <div className="flex items-center gap-2">
          <p className="text-sm font-bold">{text}</p>
          <div className="hidden lg:flex space-x-1">
            {badges.map((badge, index) => (
              <Badge key={index} text={badge} />
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-xs mt-1 text-gray-500 flex">
            View project
            <MoveRight size={18} className="ms-4" />
          </p>
        </div>
      </div>
    </div>
  );

  if (onClick) {
    return <button onClick={onClick} className="w-full text-left">{content}</button>;
  }

  return (
    <a href={target} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
};

export default function ProjectsSection() {
  const [showLockedIn, setShowLockedIn] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + screens.length) % screens.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % screens.length);

  return (
    <>
      <section className="card card-compact border border-slate-700 shadow-xl card-color p-3 lg:mr-5 rounded-lg w-full" aria-label="Projects">
        <div className="flex">
          <RocketIcon
            color="#f4f4f51a"
            className="fill-zinc-100/10"
            strokeWidth={1.5}
          />
          <h2 className="ps-2 icons-section text-sm font-bold">My projects</h2>
        </div>
        <div className="mt-3">
          <ProjectsRow
            img={Planexo}
            target="https://planexo.app"
            text="Planexo"
            badges={["Next.js", "Prisma", "Stripe"]}
          />
          <ProjectsRow
            img={LockedIn}
            text="Locked'in"
            badges={["Flutter", "Riverpod", "Dio"]}
            onClick={() => setShowLockedIn(true)}
          />
          <ProjectsRow
            img={Shadcn}
            target="https://shadcn-theme-generator.dev-yanis.fr"
            text="Theme Generator"
            badges={["React", "Tailwind", "shadcn/ui"]}
          />
        </div>
      </section>

      {showLockedIn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowLockedIn(false)}>
          <div className="bg-zinc-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full mx-4 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowLockedIn(false)}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img src={LockedIn} alt="Logo Locked'in" className="w-12 h-12 object-contain rounded-xl" />
              <div>
                <h3 className="text-lg font-bold">Locked'in</h3>
                <p className="text-sm text-gray-400">Mobile application</p>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-5">
              Mobile locker reservation app. Built with Flutter.
            </p>

            <div className="relative flex items-center justify-center">
              <button
                onClick={prevSlide}
                className="absolute -left-3 z-10 bg-zinc-800 hover:bg-zinc-700 border border-slate-600 rounded-full p-1.5 text-gray-300 hover:text-white transition-colors shadow-lg"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="overflow-hidden rounded-2xl bg-zinc-800 border border-slate-700 w-64">
                <img
                  src={screens[currentSlide]}
                  alt={`Locked'in screenshot ${currentSlide + 1}`}
                  className="w-full object-cover transition-opacity duration-300"
                />
              </div>

              <button
                onClick={nextSlide}
                className="absolute -right-3 z-10 bg-zinc-800 hover:bg-zinc-700 border border-slate-600 rounded-full p-1.5 text-gray-300 hover:text-white transition-colors shadow-lg"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex justify-center gap-1.5 mt-4">
              {screens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white w-5"
                      : "bg-zinc-600 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>

            <p className="text-center text-xs text-gray-500 mt-3">
              {currentSlide + 1} / {screens.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
