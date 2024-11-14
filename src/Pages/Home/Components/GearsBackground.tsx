import React, { useEffect } from "react";
import "./GearsBackground.css";
import gear1 from "../../../Assets/gear1.png";
import gear2 from "../../../Assets/gear2.png";
import gear3 from "../../../Assets/gear3.png";

const GearsBackground: React.FC = () => {
  useEffect(() => {
    const rotateGearsOnScroll = () => {
      const scrollPosition = window.scrollY;

      // Seleciona as engrenagens
      const gear1 = document.querySelector<HTMLElement>(".gear1");
      const gear2 = document.querySelector<HTMLElement>(".gear2");
      const gear3 = document.querySelector<HTMLElement>(".gear3");

      // Define a rotação baseada na posição do scroll
      const rotation1 = scrollPosition * -0.2;
      const rotation2 = scrollPosition * 0.2;
      const rotation3 = scrollPosition * -0.2;

      if (gear1) gear1.style.transform = `rotate(${rotation1}deg)`;
      if (gear2) gear2.style.transform = `rotate(${rotation2}deg)`;
      if (gear3) gear3.style.transform = `rotate(${rotation3}deg)`;
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
      <img src={gear1} alt="Engrenagem 1" className="gear gear1" />
      <img src={gear2} alt="Engrenagem 2" className="gear gear2" />
      <img src={gear3} alt="Engrenagem 3" className="gear gear3" />
    </div>
  );
};

export default GearsBackground;
