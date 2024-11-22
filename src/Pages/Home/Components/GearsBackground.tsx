import React, { useEffect } from "react";
import "./GearsBackground.css";
import gear1 from "../../../Assets/gear1.svg";
import gear2 from "../../../Assets/gear2.svg";
import gear3 from "../../../Assets/gear3.svg";
import gear4 from "../../../Assets/gear4.svg";
import gear5 from "../../../Assets/gear5.svg";
import gear6 from "../../../Assets/gear6.svg";
import gear7 from "../../../Assets/gear7.svg";
import gear8 from "../../../Assets/gear8.svg";
import gear9 from "../../../Assets/gear9.svg";
import gear10 from "../../../Assets/gear10.svg";

const GearsBackground: React.FC = () => {
  useEffect(() => {
    const rotateGearsOnScroll = () => {
      const scrollPosition = window.scrollY;

      // Seleciona as engrenagens
      const gear1 = document.querySelector<HTMLElement>(".gear1");
      const gear2 = document.querySelector<HTMLElement>(".gear2");
      const gear3 = document.querySelector<HTMLElement>(".gear3");
      const gear4 = document.querySelector<HTMLElement>(".gear4");
      const gear5 = document.querySelector<HTMLElement>(".gear5");
      const gear6 = document.querySelector<HTMLElement>(".gear6");
      const gear7 = document.querySelector<HTMLElement>(".gear7");
      const gear8 = document.querySelector<HTMLElement>(".gear8");
      const gear9 = document.querySelector<HTMLElement>(".gear9");
      const gear10 = document.querySelector<HTMLElement>(".gear10");

      // Define a rotação baseada na posição do scroll
      const rotation1 = scrollPosition * 0.2;
      const rotation2 = scrollPosition * -0.2;
      const rotation3 = scrollPosition * 0.2;
      const rotation4 = scrollPosition * 0.2;
      const rotation5 = scrollPosition * -0.2;
      const rotation6 = scrollPosition * -0.2;
      const rotation7 = scrollPosition * 0.2;
      const rotation8 = scrollPosition * 0.2;
      const rotation9 = scrollPosition * 0.2;
      const rotation10 = scrollPosition * -0.2;


      if (gear1) gear1.style.transform = `rotate(${rotation1}deg)`;
      if (gear2) gear2.style.transform = `rotate(${rotation2}deg)`;
      if (gear3) gear3.style.transform = `rotate(${rotation3}deg)`;
      if (gear4) gear4.style.transform = `rotate(${rotation4}deg)`;
      if (gear5) gear5.style.transform = `rotate(${rotation5}deg)`;
      if (gear6) gear6.style.transform = `rotate(${rotation6}deg)`;
      if (gear7) gear7.style.transform = `rotate(${rotation7}deg)`;
      if (gear8) gear8.style.transform = `rotate(${rotation8}deg)`;
      if (gear9) gear9.style.transform = `rotate(${rotation9}deg)`;
      if (gear10) gear10.style.transform = `rotate(${rotation10}deg)`;
    };

    // Adiciona o listener para o evento de rolagem
    window.addEventListener("scroll", rotateGearsOnScroll);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", rotateGearsOnScroll);
    };
  }, []);

  return (
    <div className="gears-background">
      <div className="gears-container">
        <img src={gear1} alt="Engrenagem 1" className="gear gear1" />
        <img src={gear2} alt="Engrenagem 2" className="gear gear2" />
        <img src={gear3} alt="Engrenagem 3" className="gear gear3" />
        <img src={gear4} alt="Engrenagem 4" className="gear gear4" />
        <img src={gear5} alt="Engrenagem 5" className="gear gear5" />
        <img src={gear6} alt="Engrenagem 6" className="gear gear6" />
        <img src={gear7} alt="Engrenagem 7" className="gear gear7" />
        <img src={gear8} alt="Engrenagem 8" className="gear gear8" />
        <img src={gear9} alt="Engrenagem 9" className="gear gear9" />
        <img src={gear10} alt="Engrenagem 10" className="gear gear10" />
      </div>
    </div>
  );
};

export default GearsBackground;
