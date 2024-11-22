import React, { useEffect } from "react";
import "./GearsBackground.css";
import gear1 from "../../../Assets/gear1.svg";
import gear2 from "../../../Assets/gear2.svg";
import gear3 from "../../../Assets/gear3.svg";
import gear4 from "../../../Assets/gear4.svg";

const GearsBackground: React.FC = () => {
  useEffect(() => {
    const rotateGearsOnScroll = () => {
      const scrollPosition = window.scrollY;

      // Seleciona as engrenagens
      const gear1 = document.querySelector<HTMLElement>(".gear1");
      const gear2 = document.querySelector<HTMLElement>(".gear2");
      const gear3 = document.querySelector<HTMLElement>(".gear3");
      const gear4 = document.querySelector<HTMLElement>(".gear4");

      // Define a rotação baseada na posição do scroll
      const rotation1 = scrollPosition * 0.2;
      const rotation2 = scrollPosition * -0.2;
      const rotation3 = scrollPosition * -0.2;
      const rotation4 = scrollPosition * 0.2;

      if (gear1) gear1.style.transform = `rotate(${rotation1}deg)`;
      if (gear2) gear2.style.transform = `rotate(${rotation2}deg)`;
      if (gear3) gear3.style.transform = `rotate(${rotation3}deg)`;
      if (gear4) gear4.style.transform = `rotate(${rotation4}deg)`;
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
      <div className="gears-container"> {/* Novo contêiner para as engrenagens */}
        <img src={gear1} alt="Engrenagem 1" className="gear gear1" />
        <img src={gear2} alt="Engrenagem 2" className="gear gear2" />
        <img src={gear3} alt="Engrenagem 3" className="gear gear3" />
        <img src={gear4} alt="Engrenagem 4" className="gear gear4" />
      </div>
    </div>
  );
};

export default GearsBackground;
