import { AiFillGithub, AiFillLinkedin,} from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";


const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/download.png"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Alex</span><br></br>BENJAMIN
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
      Front-end Developpeur
      </p>
      {/* Resume */}
      <a
        href="/assets/Alex+(12).pdf"
        download="Alex+(12).pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>CV</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.linkedin.com/in/alex-benjamin-b03430189?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhveDKAVWRqOlAJzN3D2G2Q%3D%3D" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/AlexBen92">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2"/> <span>Paris</span>
        </div>
        <p className="my-2 ">aleex.b95@gmail.com</p>
        {/* <p className="my-2"> 8514961665 / 8640960375 </p> */}
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:aleex.b95@gmail.com")}
      >
        Contact
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Theme
      </button>
      
    </>
  );
};

export default Sidebar;
