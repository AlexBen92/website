import { useState } from "react";
import ProjetCard from "../components/ProjetCard";
import ProjetsNavbar from "../components/ProjetsNavbar";
import { projets as projetsData } from "../data";
import { Category } from "../types";

const Projets = () => {
  const [projets, setProjets] = useState(projetsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjets(projetsData);
      return;
    }

    //  const newArray = projetsData.filter((projet) =>
    //    projet.category.includes(category)
    //  );
    //  setProjets(newArray);
   
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjetsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projets.map((projet) => (
          <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjetCard projet={projet} key={projet.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
