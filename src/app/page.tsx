import { Scrollbar } from "@/components/Scrollbar/Scrollbar";
import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Typewrite } from "@/components/Typewrite/Typewrite";
import { Title } from "@/components/title/Title";

export default function Home() {
  return (
    <main className="flex flex-col">
      <article
        id="home"
        className="flex  flex-col justify-around items-center w-full h-screen  max-md:h-full p-4"
      >
        <div className="flex flex-col w-96 justify-center items-center gap-4">
          <div className="avatar">
            <div className="w-24 mask mask-hexagon-2 max-md:w-48">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocKDA6DW8XorTUveVakbKZZotc83UcNsCz4Fhm1bh_vJBoOFwPQ3=s288-c-no" />
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-extrabold max-md:text-4xl">
              Gabriel Da Silva Cruz
            </h1>
            <Typewrite
              words={["Engenheiro De Software", "Apaixonado Por Programação"]}
            />
          </div>

          <div className=" flex flex-row gap-2 text-center my-4">
            <FaLinkedinIn className="w-6 h-6 max-md:w-12 max-md:h-12 hover:animate-pulse hover:text-primary" />
            <FaFacebookF className="w-6 h-6 max-md:w-12 max-md:h-12 hover:animate-pulse hover:text-primary" />
            <FaYoutube className="w-6 h-6 max-md:w-12 max-md:h-12 hover:animate-pulse hover:text-primary" />
            <FaGithubAlt className="w-6 h-6 max-md:w-12 max-md:h-12 hover:animate-pulse hover:text-primary" />
          </div>

          <button className="btn max-md:btn-lg btn-primary rounded-badge">
            contrate-me
          </button>
        </div>
        <Scrollbar sectionId="about" />
      </article>

      <article
        id="about"
        className="flex  flex-col gap-4 items-center   w-full h-screen max-md:h-full px-10"
      >
        <Title>Sobre mim</Title>
        <div className="flex w-full flex-row  max-md:flex-col max-md:text-2xl justify-center items-center">
          <div className="flex flex-col w-full h-full">
            <span className="mockup-code p-4">
              <code>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                officiis maiores? Reprehenderit quaerat, iure odit aut
                dignissimos, ad et culpa adipisci quae corporis aspernatur
                facilis nemo! Quasi, nemo natus. Consectetur. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Sapiente architecto ipsam
                asperiores nihil veritatis magnam, voluptatibus rem voluptatum
                doloribus dolor corrupti blanditiis, amet iure dolores aperiam
                incidunt laboriosam quam reiciendis?
              </code>
            </span>
            <button className="btn btn-primary  rounded-badge my-4 w-fit">
              Baixar CSV
            </button>
          </div>
          <div className="flex w-full flex-row flex-wrap gap-2 p-2  justify-center items-center">
            <div className="w-24 h-24 bg-blue-600 rounded-lg hover:animate-spin"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
            <div className="w-24 h-24 bg-blue-600 rounded-lg"></div>
          </div>
        </div>
        <Scrollbar sectionId="about" />
      </article>
      <div id="experiencia" className="w-full h-screen bg-green-500"></div>
      <div id="teste2" className="w-full h-screen bg-red-500"></div>
    </main>
  );
}
