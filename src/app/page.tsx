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

      <div id="about" className="w-full h-screen">
        <div className="flex  flex-col justify-around items-center w-full h-screen gap-4 p-4 ">
          <div className="flex w-full h-80 max-md:flex-col justify-center items-center gap-4 ">
            <div
              id="left"
              className="flex flex-col justify-start items-center align-top gap-"
            >
              <h3 className="text-primary text-2xl font-extrabold ">
                Sobre Mim
              </h3>
              <div className="w-28 mask mask-circle m-4 max-md:hidden">
                <img src="https://lh3.googleusercontent.com/a/ACg8ocKDA6DW8XorTUveVakbKZZotc83UcNsCz4Fhm1bh_vJBoOFwPQ3=s288-c-no" />
              </div>
            </div>

            <div id="right" className=" w-full">
              <div id="dialogo" className="chat chat-start  h-full w-full">
                <div className="chat-bubble max-md:cha chat-footer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus rem eius inventore sequi, nostrum eaque optio
                  provident placeat rerum at officiis deleniti, mollitia
                  consequatur iusto veniam perferendis ipsa incidunt architecto!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti, iste accusamus, explicabo molestias optio
                  perferendis perspiciatis tenetur tempora assumenda magni cum
                  error ut ipsam placeat sit obcaecati architecto beatae minus?
                </div>
              </div>
            </div>
            <div id="habilidades" className="flex  flex-col max-md:flex-row flex-wrap min-w-60 gap-4">
              <div className="flex flex-col w-full">
                <span className="flex  justify-between items-center gap-4">
                  <strong>Front End</strong> <strong>85%</strong>
                </span>
                <progress
                  className="progress progress-success"
                  value="85"
                  max="100"
                ></progress>
              </div>

              <div className="flex flex-col  w-full">
                <span className="flex  justify-between items-center gap-4">
                  <strong>Back End</strong> <strong>80%</strong>
                </span>
                <progress
                  className="progress progress-secondary"
                  value="80"
                  max="100"
                ></progress>
              </div>

              <div className="flex flex-col  w-full">
                <span className="flex  justify-between items-center gap-4">
                  <strong>RPA</strong> <strong>75%</strong>
                </span>
                <progress
                  className="progress progress-info"
                  value="75"
                  max="100"
                ></progress>
              </div>

              <div className="flex flex-col  w-full">
                <span className="flex  justify-between items-center gap-4">
                  <strong>Mobile</strong> <strong>65%</strong>
                </span>
                <progress
                  className="progress progress-primary"
                  value="65"
                  max="100"
                ></progress>
              </div>

              <div className="flex flex-col  w-full">
                <span className="flex  justify-between items-center gap-4">
                  <strong>IU/UX Designer</strong> <strong>58%</strong>
                </span>
                <progress
                  className="progress progress-warning"
                  value="58"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
          <Scrollbar sectionId="experiencia" />
        </div>
      </div>
      <div id="experiencia" className="w-full h-screen bg-green-500"></div>
      <div id="teste2" className="w-full h-screen bg-red-500"></div>
    </>
  );
}
