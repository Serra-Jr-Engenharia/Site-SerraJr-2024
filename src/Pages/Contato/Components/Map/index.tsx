import React from "react";

import {
    Container, 
    Iframe
} from "./style";

const Mapa: React.FC = () => {
  return (
    <Container>
       <Iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Rua Bonfim n°25 - Vila Amelia, Nova Friburgo - RJ, 28625-570&t=&z=17&ie=UTF8&iwloc=&output=embed"/>
    </Container>
  );
}

export default Mapa;