import Link from "next/link";
import Image from "next/image";
import icon from "../public/icon.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import useMediaQueryMatches, {
  MEDIA_QUERY_BREAKPOINTS,
} from "../hooks/useMediaQueryMatches";
import ProfessorSearch from "./professorSearch";

const Navbar = () => {
  const matches = useMediaQueryMatches(MEDIA_QUERY_BREAKPOINTS.lg);

  let links;
  if (matches) {
    links = (
      <div className="ml-auto flex justify-end">
        <div className="grid grid-cols-3 items-center ">
          <div>
            <a
              href={"/university"}
              className="font-bold m-2 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 duration-200"
            >
              Universities
            </a>
          </div>
          <div>
            <a
              href={"/professor"}
              className="font-bold m-2 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 duration-200"
            >
              Professors
            </a>
          </div>
          <div>
            <a
              href={"/login"}
              className="font-bold m-2 px-3 py-2 bg-green-300 rounded-lg hover:bg-green-500 hover:text-white duration-200"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    links = (
      <div className="flex justify-end items-center mr-4">
        <Bars3Icon className="h-8 w-8 "></Bars3Icon>
      </div>
    );
  }

  return (
    <nav className="sticky top-0 z-50 w-full grid grid-cols-2 lg:grid-cols-3 shadow-lg bg-white">
      <div className="m-3 flex items-center">
        <a href={"/"}>
          <div className="flex items-center">
            <div className="w-12 h-12">
              <Image src={icon} alt="Rotten Professors"></Image>
            </div>
            <h1 className="text-lg font-bold whitespace-nowrap">
              Rotten Professors
            </h1>
          </div>
        </a>
      </div>
      {matches && (
        <div className="flex items-center m-3">
          <ProfessorSearch></ProfessorSearch>
        </div>
      )}
      {links}
    </nav>
  );
};

export default Navbar;
