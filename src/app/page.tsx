import { Scrollbar } from "@/components/Scrollbar/Scrollbar";
import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Typewrite } from "@/components/Typewrite/Typewrite";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="flex  flex-col justify-around items-center w-full h-screen gap-4 p-4"
      >
        <div className="flex flex-col w-96 justify-center items-center gap-4">
          <div className="avatar">
            <div className="w-24 mask mask-hexagon-2">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocKDA6DW8XorTUveVakbKZZotc83UcNsCz4Fhm1bh_vJBoOFwPQ3=s288-c-no" />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-extrabold">Gabriel SCruz</h3>
            <Typewrite
              words={["Engenheiro De Software", "Apaixonado Por Programação"]}
            />
          </div>

          <div className=" flex flex-row gap-2 text-center my-4">
            <FaLinkedinIn className="w-6 h-6 hover:animate-pulse hover:text-primary" />
            <FaFacebookF className="w-6 h-6 hover:animate-pulse hover:text-primary" />
            <FaYoutube className="w-6 h-6 hover:animate-pulse hover:text-primary" />
            <FaGithubAlt className="w-6 h-6 hover:animate-pulse hover:text-primary" />
          </div>

          <button className="btn btn-primary rounded-badge">contrate-me</button>
        </div>
        <Scrollbar sectionId="about" />
      </div>

      <div id="about" className="w-full h-screen bg-blue-500"></div>
      <div id="teste1" className="w-full h-screen bg-green-500"></div>
      <div id="teste2" className="w-full h-screen bg-red-500"></div>
    </>
  );
}
