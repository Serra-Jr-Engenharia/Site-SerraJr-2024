import { FunctionComponent } from "react";
import { SliderContainer } from "./style";

import InovaFri from "../../Assets/Sliders/inovafri.svg";
import Iprj from "../../Assets/Sliders/iprj.svg";
import Ligajr from "../../Assets/Sliders/ligajr.svg";
import Voitto from "../../Assets/Sliders/voitto.svg";
import WiseUp from "../../Assets/Sliders/wiseup.svg";

import Marquee from "react-fast-marquee";

const Slider: FunctionComponent = () => {
  return (
    <Marquee>
      <SliderContainer>
        <img src={InovaFri} alt="" width={160} />
      </SliderContainer>
      <SliderContainer>
        <img src={WiseUp} alt="" width={160} height={"auto"} />
      </SliderContainer>
      <SliderContainer>
        <img src={Iprj} alt="" width={160} height={"auto"} />
      </SliderContainer>
      <SliderContainer>
        <img src={Ligajr} alt="" width={140} height={"auto"} />
      </SliderContainer>
      <SliderContainer>
        <img src={Voitto} alt="" width={160} height={"auto"} />
      </SliderContainer>
      <SliderContainer>
        <img src={InovaFri} alt="" width={160} />
      </SliderContainer>
      <SliderContainer>
        <img src={WiseUp} alt="" width={160} height={"auto"} />
      </SliderContainer>
      <SliderContainer>
        <img src={Iprj} alt="" width={160} height={"auto"} />
      </SliderContainer>
      <SliderContainer>
        <img src={Ligajr} alt="" width={140} height={"auto"} />
      </SliderContainer>
      <SliderContainer>
        <img src={Voitto} alt="" width={160} height={"auto"} />
      </SliderContainer>
    </Marquee>
  );
};

export default Slider;
