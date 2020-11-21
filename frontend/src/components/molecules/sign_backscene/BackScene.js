import React, {useState} from 'react';
import whiteLogo from '../../../assets/images/whiteLogo.png';
import circle from '../../../assets/images/circle.png';
import Figure from '../../atoms/figure/Figure';
import {default as circleStyle} from './CircleStyle';
import {default as logoStyle} from './LogoStyle';

const BackScene = () => {
  const [figures, setFigures] = useState([
    {
      image: circle,
      styles: {
        container: circleStyle.container,
        background: circleStyle.background,
      },
    },

    {
      image: whiteLogo,
      styles: {
        container: logoStyle.container,
        background: logoStyle.background,
      },
    },
  ]);

  return figures.map((figure, i) => {
    return <Figure key={i} styles={figure.styles} image={figure.image} />;
  });
};

export default BackScene;
