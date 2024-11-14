import React from 'react';
import './GearsBackground.css';
import gear1 from '../../../Assets/gear1.png';
import gear2 from '../../../Assets/gear2.png';
import gear3 from '../../../Assets/gear3.png';

const GearsBackground: React.FC = () => {
  return (
    <div className="gears-background">
      <img src={gear1} alt="Engrenagem 1" className="gear gear1" />
      <img src={gear2} alt="Engrenagem 2" className="gear gear2" />
      <img src={gear3} alt="Engrenagem 3" className="gear gear3" />
    </div>
  );
};

export default GearsBackground;
